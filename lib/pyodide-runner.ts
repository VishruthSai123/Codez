/**
 * Pyodide In-Browser Python Runner
 * 
 * Executes Python code entirely in the browser using WebAssembly.
 * No backend API needed — zero latency, works offline, no rate limits.
 * 
 * Usage:
 *   import { runPython } from "@/lib/pyodide-runner";
 *   const result = await runPython('print("Hello World")');
 *   // result = { stdout: "Hello World\n", stderr: "", exitCode: 0 }
 */

// Singleton Pyodide instance (loaded once, reused)
let pyodideInstance: any = null;
let loadingPromise: Promise<any> | null = null;

/**
 * Load Pyodide from CDN. Called once, subsequent calls return the cached instance.
 */
async function loadPyodideEngine(): Promise<any> {
  if (pyodideInstance) return pyodideInstance;
  if (loadingPromise) return loadingPromise;

  loadingPromise = (async () => {
    // Dynamically load the Pyodide script from CDN
    if (typeof window !== "undefined" && !(window as any).loadPyodide) {
      await new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js";
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Failed to load Pyodide from CDN"));
        document.head.appendChild(script);
      });
    }

    const loadPyodide = (window as any).loadPyodide;
    if (!loadPyodide) {
      throw new Error("Pyodide loader not available");
    }

    pyodideInstance = await loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/",
    });

    return pyodideInstance;
  })();

  return loadingPromise;
}

export type RunResult = {
  stdout: string;
  stderr: string;
  exitCode: number;
  error?: string;
};

/**
 * Execute Python code in the browser.
 * Captures stdout/stderr, handles syntax errors, runtime errors, and timeouts.
 */
export async function runPython(code: string, timeoutMs: number = 5000): Promise<RunResult> {
  try {
    const pyodide = await loadPyodideEngine();

    // Set up stdout/stderr capture
    pyodide.runPython(`
import sys
from io import StringIO
__stdout_capture = StringIO()
__stderr_capture = StringIO()
sys.stdout = __stdout_capture
sys.stderr = __stderr_capture
`);

    // Execute user code with a timeout
    // Pyodide runs on the main thread, so we track wall-clock time
    // and check after execution completes. For true interruption of
    // infinite loops, a Web Worker would be needed (future enhancement).
    const startTime = performance.now();

    try {
      await pyodide.runPythonAsync(code);
    } catch (err: any) {
      // Extract stdout so far
      const stdout = pyodide.runPython("__stdout_capture.getvalue()") || "";

      // Reset sys streams
      pyodide.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`);

      // Parse the Python error
      const errorMessage = err.message || String(err);
      const errorInfo = parsePythonError(errorMessage);

      return {
        stdout,
        stderr: errorInfo.cleanMessage,
        exitCode: 1,
        error: errorInfo.friendlyMessage,
      };
    }

    const elapsed = performance.now() - startTime;

    if (elapsed > timeoutMs) {
      pyodide.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`);
      return {
        stdout: "",
        stderr: "Execution timed out",
        exitCode: 1,
        error: `⏱️ Timeout: Your code took ${Math.round(elapsed / 1000)}s to run (limit: ${Math.round(timeoutMs / 1000)}s). Check for infinite loops!`,
      };
    }

    // Capture output
    const stdout = pyodide.runPython("__stdout_capture.getvalue()") || "";
    const stderr = pyodide.runPython("__stderr_capture.getvalue()") || "";

    // Reset sys streams
    pyodide.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`);

    return {
      stdout,
      stderr,
      exitCode: 0,
    };
  } catch (err: any) {
    return {
      stdout: "",
      stderr: err.message || "Unknown error",
      exitCode: 1,
      error: `Failed to initialize Python engine: ${err.message}`,
    };
  }
}

/**
 * Execute JavaScript code in a sandboxed scope.
 * Dangerous globals are explicitly blocked to prevent code injection.
 */
export function runJavaScript(code: string): RunResult {
  const logs: string[] = [];
  const errors: string[] = [];

  // Create a sandboxed console
  const sandboxConsole = {
    log: (...args: any[]) => logs.push(args.map(String).join(" ")),
    error: (...args: any[]) => errors.push(args.map(String).join(" ")),
    warn: (...args: any[]) => logs.push(args.map(String).join(" ")),
    info: (...args: any[]) => logs.push(args.map(String).join(" ")),
  };

  // Block dangerous globals by shadowing them as undefined parameters
  const BLOCKED_GLOBALS = [
    "window", "document", "globalThis", "self",
    "fetch", "XMLHttpRequest", "WebSocket",
    "localStorage", "sessionStorage", "indexedDB",
    "eval", "Function", "importScripts",
    "navigator", "location", "history",
  ];

  const paramNames = ["console", ...BLOCKED_GLOBALS];
  const paramValues: any[] = [sandboxConsole, ...BLOCKED_GLOBALS.map(() => undefined)];

  try {
    // Create a sandboxed function with blocked globals
    // eslint-disable-next-line no-new-func
    const fn = new Function(...paramNames, code);
    fn(...paramValues);

    return {
      stdout: logs.join("\n"),
      stderr: errors.join("\n"),
      exitCode: errors.length > 0 ? 1 : 0,
    };
  } catch (err: any) {
    return {
      stdout: logs.join("\n"),
      stderr: err.message || String(err),
      exitCode: 1,
      error: parseJavaScriptError(err),
    };
  }
}

/**
 * Parse Python error messages into user-friendly feedback.
 */
function parsePythonError(errorMessage: string): { cleanMessage: string; friendlyMessage: string } {
  const lines = errorMessage.split("\n");
  // Find the actual error line (usually the last meaningful line)
  const errorLine = lines.filter(l => l.trim()).pop() || errorMessage;

  if (errorMessage.includes("SyntaxError")) {
    const match = errorMessage.match(/SyntaxError: (.+)/);
    return {
      cleanMessage: errorLine,
      friendlyMessage: `🔴 Syntax Error: ${match?.[1] || "Check your code for typos, missing colons, or unmatched brackets."}`,
    };
  }

  if (errorMessage.includes("NameError")) {
    const match = errorMessage.match(/NameError: name '(.+)' is not defined/);
    return {
      cleanMessage: errorLine,
      friendlyMessage: match
        ? `🔴 Name Error: The variable \`${match[1]}\` hasn't been defined yet. Did you spell it correctly?`
        : "🔴 Name Error: You used a name that Python doesn't recognize.",
    };
  }

  if (errorMessage.includes("TypeError")) {
    const match = errorMessage.match(/TypeError: (.+)/);
    return {
      cleanMessage: errorLine,
      friendlyMessage: `🔴 Type Error: ${match?.[1] || "You tried to use a value in a way that doesn't work for its type."}`,
    };
  }

  if (errorMessage.includes("IndentationError")) {
    return {
      cleanMessage: errorLine,
      friendlyMessage: "🔴 Indentation Error: Python uses spaces to organize code. Make sure your lines are properly indented.",
    };
  }

  if (errorMessage.includes("IndexError")) {
    return {
      cleanMessage: errorLine,
      friendlyMessage: "🔴 Index Error: You tried to access an item that doesn't exist in the list. Remember, Python lists start at index 0!",
    };
  }

  if (errorMessage.includes("ZeroDivisionError")) {
    return {
      cleanMessage: errorLine,
      friendlyMessage: "🔴 Division Error: You can't divide by zero! Check your divisor.",
    };
  }

  return {
    cleanMessage: errorLine,
    friendlyMessage: `🔴 Error: ${errorLine}`,
  };
}

/**
 * Parse JavaScript error messages into user-friendly feedback.
 */
function parseJavaScriptError(err: Error): string {
  if (err instanceof SyntaxError) {
    return `🔴 Syntax Error: ${err.message}. Check for missing brackets, quotes, or semicolons.`;
  }
  if (err instanceof ReferenceError) {
    return `🔴 Reference Error: ${err.message}. Did you declare this variable?`;
  }
  if (err instanceof TypeError) {
    return `🔴 Type Error: ${err.message}`;
  }
  return `🔴 Error: ${err.message}`;
}

/**
 * Check if the Pyodide engine is loaded and ready.
 */
export function isPyodideReady(): boolean {
  return pyodideInstance !== null;
}

/**
 * Preload the Pyodide engine in the background.
 * Call this early (e.g., when a CODE lesson starts loading) for instant execution later.
 */
export function preloadPyodide(): void {
  loadPyodideEngine().catch(() => {
    // Silently fail — will retry when actually needed
  });
}
