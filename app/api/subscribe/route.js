import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createClient } from '@/utils/supabase/server';

export const runtime = 'nodejs';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, source } = body || {};

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRe.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const ip =
      request.headers.get('cf-connecting-ip') ||
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      null;

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase.from('subscribers').insert({
      email,
      source: source || 'footer',
      ip,
      user_agent: request.headers.get('user-agent') || null,
    });

    if (error) {
      if (error.code === '23505' || /duplicate/i.test(error.message)) {
        return NextResponse.json({ ok: true, alreadySubscribed: true });
      }
      return NextResponse.json(
        { error: 'Could not subscribe', detail: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: 'Internal server error', detail: err?.message },
      { status: 500 }
    );
  }
}
