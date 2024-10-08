'use server'

import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'

export default async function deletePost(postId: string) {
  const token = cookies().get('token-')?.value
  if (!token) throw new Error('Token não encontrado.')

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + token,
        },
        next: {
          revalidate: 60,
        },
      },
    )

    if (!res.ok) {
      const data = await res.json()
      throw new Error(data.message || 'Erro desconhecido')
    }

    const data = res.status !== 204 ? await res.json() : null

    revalidateTag('posts')

    return { ok: true, error: '', data }
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
