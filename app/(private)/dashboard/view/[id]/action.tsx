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
  userId: string
}

export default async function postUpdate(
  state: { data: null | Post; error: string; ok: boolean; redirect?: boolean },
  formData: FormData,
) {
  try {
    const token = cookies().get('token-')?.value
    if (!token) throw new Error('Token não encontrado.')

    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    const id = formData.get('id') as string
    if (!id) throw new Error('ID do post não fornecido.')

    const updatedPost = Object.fromEntries(formData.entries())

    delete updatedPost.id

    const response = await fetch(`${apiUrl}/posts/${id}`, {
      method: 'PATCH',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPost),
      next: {
        revalidate: 60,
      },
    })

    if (!response.ok) throw new Error('Erro ao atualizar o post.')

    const data = (await response.json()) as Post
    revalidateTag('posts')

    return { data, ok: true, error: '', redirect: true }
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
