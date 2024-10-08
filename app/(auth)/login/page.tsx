import ContentAuth from '@/app/components/content-auth'
import { TitleAuth } from '@/app/components/title-auth'
import { Metadata } from 'next'
import Form from './form'

export const metadata: Metadata = {
  title: 'Login',
}

export default function Login() {
  return (
    <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
      <div className="max-w-xl lg:max-w-3xl">
        <div className="relative -mt-16 block ">
          <TitleAuth title="Bem vindo a Gen's Posts" />
          <ContentAuth content="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
        </div>

        <Form />
      </div>
    </main>
  )
}
