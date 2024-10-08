import ContentAuth from '@/app/components/content-auth'
import { TitleAuth } from '@/app/components/title-auth'
import Form from './form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Register',
}
export default function Register() {
  return (
    <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
      <div className="max-w-xl lg:max-w-3xl">
        <div className="relative -mt-16 block ">
          <TitleAuth title=" Faça seu cadastro" />
          <ContentAuth content="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
        </div>
        <Form />
      </div>
    </main>
  )
}
