'use server'

import { cookies } from 'next/headers'

export default async function login(
  state: { data: null; error: string; ok: boolean },
  formData: FormData,
) {
  const userEmail = formData.get('email') as string | null
  const password = formData.get('password') as string | null

  const payload = {
    email: userEmail,
    password,
  }

  try {
    if (!userEmail || !password)
      throw new Error('Email e senha são obrigatórios')

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    if (!res.ok) throw new Error('Senha ou usuário inválidos.')

    const data = await res.json()

    cookies().set('token-', data.accessToken, {
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
