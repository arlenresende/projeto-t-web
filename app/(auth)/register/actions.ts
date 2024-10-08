'use server'

import { cookies } from 'next/headers'

export default async function register(
  state: { data: null; error: string; ok: boolean },
  formData: FormData,
) {
  const userName = formData.get('name') as string | null
  const userEmail = formData.get('email') as string | null
  const password = formData.get('password') as string | null

  const payload = {
    name: userName,
    email: userEmail,
    password,
    createdAt: new Date().toISOString(),
  }

  try {
    if (!userName || !userEmail || !password) {
      throw new Error('Email e senha são obrigatórios')
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const data = await res.json()

    if (res.status !== 201) {
      throw new Error(data.message)
    }

    cookies().set('token', data.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
    })

    return {
      data: null,
      ok: true,
      error: '',
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        ok: false,
        error: error.message,
        data: null,
      }
    } else {
      return {
        ok: false,
        error: '',
        data: null,
      }
    }
  }
}
