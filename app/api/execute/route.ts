import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { language, code } = body;

    if (!language || !code) {
      return NextResponse.json(
        { error: "Language and code are required." },
        { status: 400 }
      );
    }

    const lang = language.toLowerCase();
    
    // Map language names to Piston runtime aliases/versions
    let pistonLang = lang;
    let pistonVersion = "*";
    
    if (lang === "python" || lang === "python3") {
      pistonLang = "python";
    } else if (lang === "javascript" || lang === "js" || lang === "node") {
      pistonLang = "javascript";
    } else {
      return NextResponse.json(
        { error: `Unsupported language: ${language}` },
        { status: 400 }
      );
    }

    // Call Piston v2 API
    const response = await fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language: pistonLang,
        version: pistonVersion,
        files: [
          {
            name: `main.${pistonLang === "python" ? "py" : "js"}`,
            content: code,
          }
        ],
        compile_timeout: 10000,
        run_timeout: 3000,
      }),
    });

    if (!response.ok) {
      console.error("Piston API error status:", response.status);
      return NextResponse.json(
        { error: "Failed to execute code on remote server." },
        { status: 500 }
      );
    }

    const result = await response.json();

    // Map Piston response to our expected format
    return NextResponse.json({
      run: {
        stdout: result.run?.stdout || "",
        stderr: result.run?.stderr || "",
        code: result.run?.code || 0,
        signal: result.run?.signal || null,
      }
    });

  } catch (error) {
    console.error("Execute API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
