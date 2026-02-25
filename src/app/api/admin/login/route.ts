import { NextRequest, NextResponse } from "next/server";

// Simple admin credentials (in production, use proper auth with database)
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@portfolio.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password required" },
        { status: 400 }
      );
    }

    // Simple credential check
    // In production, this should use proper authentication with hashed passwords
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      return NextResponse.json({ success: true, email });
    }

    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    );
  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 500 }
    );
  }
}
