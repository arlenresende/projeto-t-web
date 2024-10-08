'use client'

import { Input } from '@/app/components/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { AlertCircle } from 'lucide-react'
import { useFormState, useFormStatus } from 'react-dom'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import createPost from '../actions/post-create'
import Spinner from '@/app/components/spinner'
import { useEffect } from 'react'

function FormButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      className="bg-violet-500 hover:bg-violet-600 text-white w-full font-semibold py-2 uppercase"
      disabled={pending}
    >
      {pending ? (
        <div role="status">
          <Spinner />
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        'Cadastrar'
      )}
    </Button>
  )
}

export function Form() {
  const [state, action] = useFormState(createPost, {
    ok: false,
    error: '',
    data: null,
  })

  useEffect(() => {
    if (state.redirect) {
      window.location.href = '/dashboard'
    }
  }, [state])

  return (
    <>
      <form className="w-full" action={action}>
        <div className="grid grid-cols-3 gap-4 items-start w-full justify-start">
          <Input
            placeholder="Digite o titulo do post"
            label="Título do post"
            name="title"
            isColumn
          />
          <Input
            placeholder="Digite a url do post"
            label="Url do Post"
            name="slug"
            isColumn
          />
          <Input
            placeholder="Autor do post"
            label="Autor"
            name="author"
            isColumn
          />
        </div>
        <div className="grid grid-cols-1 gap-4 items-start w-full justify-start mt-4">
          <Textarea placeholder="Descrição do Post" name="description" />
        </div>
        <div className="flex gap-4 mt-4 justify-end w-full items-center max-w-40">
          <FormButton />
        </div>
      </form>
      {!state.ok && state.error && (
        <Alert variant="destructive" className="mt-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Erro:</AlertTitle>
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}
    </>
  )
}
