import postGetOnly from '../(private)/dashboard/view/action'

// TODO : Refatorar para usar o postGetOnly usando slug
export default async function Single({
  params,
}: {
  params: {
    id: string
  }
}) {
  const { id } = params
  const { data } = await postGetOnly(id)

  if (!data) {
    return (
      <div>
        <p>Erro: Não foi possível carregar o post.</p>
      </div>
    )
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="my-8 text-2xl font-bold text-violet-600 sm:text-3xl md:text-4xl">
        {data.post.title}
      </h1>
      <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2">
        {data.post.description}
      </div>
    </div>
  )
}
