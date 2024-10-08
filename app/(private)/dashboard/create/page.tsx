import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'

import { Form } from './form'

export default async function CreateProduct() {
  return (
    <div className="flex w-full items-start justify-start">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Cadastro de Postagens</CardTitle>
          <CardDescription className="flex justify-between gap-4">
            <span>
              Adicione novas postagens ao seu blog preenchendo as informações
              abaixo. Certifique-se de incluir um título atrativo, uma descrição
              envolvente e os links relevantes para direcionar os leitores a
              mais conteúdos ou redes sociais.
            </span>
            <Button asChild variant={'outline'}>
              <Link href="/dashboard/products/preview">Visualizar Post</Link>
            </Button>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form />
        </CardContent>
      </Card>
    </div>
  )
}
