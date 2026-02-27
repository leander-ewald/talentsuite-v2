import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createHmac } from "crypto";

const AUTH_COOKIE = "ts-auth";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 Tage

function getAuthToken(): string {
  const secret = process.env.INTERNAL_PASSWORD || "";
  return createHmac("sha256", secret).update("ts-internal-auth").digest("hex");
}

// POST: Passwort prüfen + Cookie setzen
export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const expected = process.env.INTERNAL_PASSWORD;

    if (!expected || password !== expected) {
      return NextResponse.json({ error: "Falsches Passwort." }, { status: 401 });
    }

    const token = getAuthToken();
    const response = NextResponse.json({ ok: true });
    response.cookies.set(AUTH_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: COOKIE_MAX_AGE,
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }
}

// GET: Session prüfen (Cookie validieren)
export async function GET() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get(AUTH_COOKIE);

  if (!authCookie || authCookie.value !== getAuthToken()) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  return NextResponse.json({ authenticated: true });
}
