"use client";

import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { Play, Terminal, X, AlertTriangle, CheckCircle, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { runPython, runJavaScript, preloadPyodide, isPyodideReady } from "@/lib/pyodide-runner";

type CodeEditorCardProps = {
  content: any;
  onAttempt?: () => void;
};

export type CodeEditorRef = {
  validate: () => Promise<boolean>;
};

type ExecutionResult = {
  status: "idle" | "loading_engine" | "running" | "success" | "error" | "wrong_output";
  output: string;
  feedback?: string;
};

export const CodeEditorCard = forwardRef<CodeEditorRef, CodeEditorCardProps>(({ content, onAttempt }, ref) => {
  const initialCode = content?.initialCode || "# Write your code here\n";
  const [code, setCode] = useState(initialCode);
  const [result, setResult] = useState<ExecutionResult>({ status: "idle", output: "" });
  const [showConsole, setShowConsole] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [engineReady, setEngineReady] = useState(false);

  const variant = content?.variant || "guided"; // default to guided
  const language = content?.language || "python";
  const expectedOutput = content?.expectedOutput?.trim();

  // Preload Pyodide when the component mounts
  useEffect(() => {
    if (language === "python") {
      preloadPyodide();
      const interval = setInterval(() => {
        if (isPyodideReady()) {
          setEngineReady(true);
          clearInterval(interval);
        }
      }, 500);
      return () => clearInterval(interval);
    } else {
      setEngineReady(true); // JS runs natively
    }
  }, [language]);

  const executeCode = async (codeToRun: string) => {
    if (language === "python") {
      return await runPython(codeToRun, 5000);
    } else if (language === "javascript" || language === "js") {
      return runJavaScript(codeToRun);
    }
    return { stdout: "", stderr: "Unsupported language", exitCode: 1 };
  };

  const handleRun = async () => {
    setShowConsole(true);
    
    if (!engineReady && language === "python") {
      setResult({ status: "loading_engine", output: "Loading Python engine..." });
      try {
        await runPython("pass"); // triggers load
        setEngineReady(true);
      } catch {
        setResult({ status: "error", output: "Failed to load Python engine. Please refresh." });
        return;
      }
    }

    setResult({ status: "running", output: "Running..." });

    const execResult = await executeCode(code);
    const stdout = execResult.stdout.trimEnd();
    const stderr = execResult.stderr;

    if (execResult.exitCode !== 0) {
      setResult({
        status: "error",
        output: stderr || "An error occurred.",
        feedback: (execResult as any).error || "Check your code and try again.",
      });
      if (onAttempt) onAttempt();
      return;
    }

    // Successful execution
    setHasRun(true);
    setResult({
      status: "success",
      output: stdout || "(No output)",
      feedback: "✅ Code ran successfully! (Click 'Check' when you are ready)",
    });
  };

  // Expose the validate method to the parent
  useImperativeHandle(ref, () => ({
    validate: async (): Promise<boolean> => {
      if (!expectedOutput || variant === "explore") {
        // No expected output or explore mode — any successful run counts
        // Ensure it runs once successfully
        if (!hasRun) {
           await handleRun();
        }
        return true;
      }

      setShowConsole(true);

      if (!engineReady && language === "python") {
        setResult({ status: "loading_engine", output: "Loading Python engine..." });
        try {
          await runPython("pass");
          setEngineReady(true);
        } catch {
          setResult({ status: "error", output: "Failed to load Python engine." });
          return false;
        }
      }

      setResult({ status: "running", output: "Checking..." });

      const execResult = await executeCode(code);
      const stdout = execResult.stdout.trimEnd();
      const stderr = execResult.stderr;

      if (execResult.exitCode !== 0) {
        setResult({
          status: "error",
          output: stderr || "An error occurred.",
          feedback: (execResult as any).error || "Your code has an error. Fix it and try again.",
        });
        if (onAttempt) onAttempt();
        return false;
      }

      // Smart output validation with configurable strictness
      const validationMode = content?.validationMode || "normalized"; // "strict" | "normalized" | "case_insensitive"

      // Normalize a string: trim, normalize line endings, remove trailing blank lines, collapse spaces
      const normalize = (s: string): string => {
        return s
          .replace(/\r\n/g, "\n")       // normalize line endings
          .replace(/[ \t]+$/gm, "")     // trim trailing spaces per line
          .replace(/\n+$/, "")          // remove trailing blank lines
          .trim();
      };

      const normalizedStdout = normalize(stdout);
      const normalizedExpected = normalize(expectedOutput);

      let isMatch = false;

      if (validationMode === "strict") {
        isMatch = normalizedStdout === normalizedExpected;
      } else if (validationMode === "case_insensitive") {
        isMatch = normalizedStdout.toLowerCase() === normalizedExpected.toLowerCase();
      } else {
        // "normalized" (default) — collapse multiple spaces, case-insensitive
        const collapseSpaces = (s: string) => s.replace(/[ \t]+/g, " ");
        isMatch = collapseSpaces(normalizedStdout).toLowerCase() === collapseSpaces(normalizedExpected).toLowerCase();
      }

      if (isMatch) {
        setResult({
          status: "success",
          output: stdout,
          feedback: "🎉 Perfect! Your output matches.",
        });
        return true;
      } else {
        if (onAttempt) onAttempt();

        // Generate educational feedback
        let feedback = "";
        if (!normalizedStdout) {
          feedback = "Your code didn't produce any output. Did you forget to use print()?";
        } else if (normalizedStdout.toLowerCase() === normalizedExpected.toLowerCase()) {
          feedback = "Almost there! Your output has the right words but the capitalization is different. Check upper/lowercase letters.";
        } else if (normalizedExpected.includes(normalizedStdout) || normalizedStdout.includes(normalizedExpected)) {
          feedback = "You're close! Your output has extra or missing text compared to what's expected. Check for extra print() calls or missing parts.";
        } else {
          feedback = "Your output doesn't match what was expected. Read the instructions again and check what your print() statements produce.";
        }

        setResult({
          status: "wrong_output",
          output: `Your output:\n${stdout || "(empty)"}\n\nExpected:\n${expectedOutput}`,
          feedback,
        });
        return false;
      }
    }
  }));

  const handleReset = () => {
    setCode(initialCode);
    setResult({ status: "idle", output: "" });
    setShowConsole(false);
  };

  return (
    <div className="flex flex-col w-full h-full rounded-3xl overflow-hidden shadow-sm relative border-2 border-slate-200">
      
      {/* Toolbar */}
      <div className="bg-slate-800 px-4 py-3 flex justify-between items-center text-white shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 hidden md:flex">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="font-semibold text-sm ml-2 md:ml-4 flex items-center">
            {language === "python" ? "main.py" : "index.js"}
            {!engineReady && language === "python" && (
              <span className="text-xs text-slate-400 ml-3 animate-pulse hidden sm:inline">Loading Python...</span>
            )}
          </span>
        </div>
        <div className="flex items-center gap-x-2">
          <Button
            onClick={handleReset}
            variant="ghost"
            size="sm"
            className="text-slate-400 hover:text-white h-8 rounded-xl"
          >
            <RotateCcw className="w-3.5 h-3.5 mr-1" /> <span className="hidden sm:inline">Reset</span>
          </Button>
          <Button
            onClick={() => setShowConsole(!showConsole)}
            variant="ghost"
            size="sm"
            className="text-slate-300 hover:text-white h-8 rounded-xl"
          >
            <Terminal className="w-3.5 h-3.5 mr-1" /> Console
          </Button>
          <Button
            onClick={handleRun}
            disabled={result.status === "running" || result.status === "loading_engine"}
            variant="secondary"
            size="sm"
            className="bg-emerald-500 hover:bg-emerald-600 text-white border-0 h-8 rounded-xl px-4"
          >
            <Play className="w-3.5 h-3.5 mr-1" />
            {result.status === "running" ? "Running..." : result.status === "loading_engine" ? "Loading..." : "Run"}
          </Button>
        </div>
      </div>

      {/* Editor + Console Overlay */}
      <div className="flex-1 relative w-full h-full bg-[#1e1e1e] overflow-hidden flex flex-col">
        {/* Editor */}
        <div className="absolute inset-0">
          <Editor
            height="100%"
            defaultLanguage={language}
            theme="vs-dark"
            value={code}
            onChange={(val) => setCode(val || "")}
            options={{
              minimap: { enabled: false },
              fontSize: 15,
              lineHeight: 24,
              padding: { top: 16, bottom: 16 },
              formatOnType: true,
              autoClosingBrackets: "always",
              wordWrap: "on",
              scrollBeyondLastLine: false,
              renderLineHighlight: "line",
              tabSize: 4,
              insertSpaces: true,
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            }}
          />
        </div>

        {/* Console Overlay (Mobile & Desktop) */}
        <AnimatePresence>
          {showConsole && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="absolute bottom-0 left-0 right-0 h-[60%] sm:h-[50%] bg-slate-50 border-t-2 border-slate-200 z-20 flex flex-col shadow-[0_-20px_50px_rgba(0,0,0,0.3)]"
            >
              <div className="flex justify-between items-center p-3 bg-slate-100 border-b border-slate-200 shrink-0">
                <span className="font-semibold text-sm text-slate-700 ml-2 flex items-center">
                  <Terminal className="w-4 h-4 mr-2 text-slate-500" /> Console Output
                </span>
                <Button onClick={() => setShowConsole(false)} variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:bg-slate-200 rounded-full">
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex-1 overflow-hidden">
                <ConsoleOutput result={result} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
});
CodeEditorCard.displayName = "CodeEditorCard";

const ConsoleOutput = ({ result }: { result: ExecutionResult }) => {
  const isError = result.status === "error" || result.status === "wrong_output";
  const isSuccess = result.status === "success";
  const isLoading = result.status === "running" || result.status === "loading_engine";

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-white">
      <div className="flex-1 p-4 lg:p-5">
        {result.feedback && (
          <div className={`mb-4 p-4 rounded-xl border flex gap-x-3 items-start text-sm shadow-sm ${
            isError ? "bg-red-50 border-red-200 text-red-900" :
            isSuccess ? "bg-emerald-50 border-emerald-200 text-emerald-900" :
            "bg-sky-50 border-sky-200 text-sky-900"
          }`}>
            {isError ? <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" /> :
             isSuccess ? <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" /> : null}
            <p className="font-medium leading-relaxed">{result.feedback}</p>
          </div>
        )}
        <pre className={`text-sm lg:text-base font-mono whitespace-pre-wrap leading-relaxed p-2 ${
          isError ? "text-red-600" : 
          isLoading ? "text-slate-400 animate-pulse" :
          "text-slate-800"
        }`}>
          {result.output || (result.status === "idle" ? "Click Run to execute your code." : "")}
        </pre>
      </div>
    </div>
  );
};
