'use server'

import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'

export type Post = {
  id: string
  title: string
  slug: string
  author: string
  createdAt: string
  description: string
}
interface Posts {
  posts: Post[]
}

export default async function postGet() {
  try {
    const token = cookies().get('token-')?.value
    if (!token) throw new Error('Token não encontrado.')
    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    const response = await fetch(`${apiUrl}/posts`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      next: {
        revalidate: 60,
        tags: ['posts'],
      },
    })
    if (!response.ok) throw new Error('Erro ao pegar o usuário.')
    const data = (await response.json()) as Posts
    revalidateTag('posts')
    return { data, ok: true, error: '' }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        ok: false,
        error: error.message,
        user: null,
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
