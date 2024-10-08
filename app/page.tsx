import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import postGet from './(private)/dashboard/actions/posts-get'

export default async function Home() {
  const { data } = await postGet()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="my-8 text-2xl font-bold text-violet-600 sm:text-3xl md:text-4xl">
        Bem vindo a Gen Posts
      </h1>
      <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2">
        {data?.posts.map(({ title, description, id }, index) => (
          <Link
            href={`${id}`}
            className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
            key={index}
          >
            <div className="grid gap-4">
              <h4 className="text-xl text-primary">{title}</h4>
              <p className="text-base opacity-75">{description}</p>
            </div>

            <div className="flex h-fit items-center text-sm font-semibold">
              <p>Leia mais </p> <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
