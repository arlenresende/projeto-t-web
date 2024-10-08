import postGet from './actions/posts-get'
import userGet from './actions/user-get'
import { columns } from './columns'
import { DataTable } from './data-table'

export default async function Dashboard() {
  const { user } = await userGet()
  const { data: posts } = await postGet()

  return (
    <>
      <h1 className="my-8 text-2xl font-bold text-violet-600 sm:text-3xl md:text-4xl">
        Bem vindo {user?.name}
      </h1>
      <DataTable columns={columns} data={posts?.posts || []} />
    </>
  )
}
