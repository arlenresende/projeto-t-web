'use server'

import { cookies } from 'next/headers'

export type User = {
  email: string
  name: string
}

export default async function userGet() {
  try {
    const token = cookies().get('token-')?.value
    if (!token) throw new Error('Token não encontrado.')
    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    const response = await fetch(`${apiUrl}/users/me`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      next: {
        revalidate: 60,
      },
    })
    if (!response.ok) throw new Error('Erro ao pegar o usuário.')
    const user = (await response.json()) as User
    return { user, isSuccess: true, error: '' }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        isSuccess: false,
        error: error.message,
        user: null,
      }
    } else {
      return {
        isSuccess: false,
        error: '',
        data: null,
      }
    }
  }
}
