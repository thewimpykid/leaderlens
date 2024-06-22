// pages/api/email.ts
import db from "@/lib/db";
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const newEmail = await db.email.create({
      data: {
        email,
      },
    });

    return NextResponse.json(newEmail, { status: 201 });
  } catch (error) {
    console.error('Error storing email:', error);
    return NextResponse.json({ error: 'Failed to store email' }, { status: 500 });
  } finally {
    await db.$disconnect();
  }
}
