'use client'

import { Input } from '@/app/components/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import login from './action'
import { AlertCircle } from 'lucide-react'
import { useFormState, useFormStatus } from 'react-dom'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

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
        'Entrar'
      )}
    </Button>
  )
}

export default function Form() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: '',
    data: null,
  })

  useEffect(() => {
    if (state.ok) window.location.href = '/dashboard'
  }, [state.ok])

  return (
    <>
      <form className="mt-12 grid grid-cols-6 gap-6" action={action}>
        <div className="col-span-6 sm:col-span-3">
          <Input
            placeholder="Digite seu email"
            label="Email:"
            type="email"
            name="email"
            isColumn
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <Input
            placeholder="Digite sua senha"
            label="Senha: "
            type="password"
            name="password"
            isColumn
          />
        </div>

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <FormButton />
        </div>

        <div className="col-span-6">
          <p className="mt-4 text-sm text-gray-700 sm:mt-0">
            Ainda não tem uma conta?
            <Link href="/register" className="font-bold underline ml-2">
              Crie Agora!
            </Link>
            .
          </p>
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
