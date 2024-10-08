'use server'

import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'

export default async function createPost(
  state: { data: null; error: string; ok: boolean; redirect?: boolean },
  formData: FormData,
) {
  const token = cookies().get('token-')?.value
  if (!token) throw new Error('Token não encontrado.')

  const title = formData.get('title') as string | null
  const slug = formData.get('slug') as string | null
  const author = formData.get('author') as string | null
  const description = formData.get('description') as string | null

  const payload = {
    title,
    slug,
    author,
    description,
    createdAt: new Date().toISOString(),
  }

  try {
    if (!title || !slug || !author || !description) {
      throw new Error('campos obrigatórios')
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(payload),
      next: {
        revalidate: 60,
      },
    })

    const data = await res.json()

    if (res.status !== 201) {
      throw new Error(data.message)
    }
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
