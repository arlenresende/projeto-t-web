import { Metadata } from 'next'
import postGet from './actions/posts-get'
import userGet from './actions/user-get'
import { columns } from './columns'
import { DataTable } from './data-table'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default async function Dashboard() {
  const { user } = await userGet()
  const { data: posts } = await postGet()

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="my-8 text-2xl font-bold text-violet-600 sm:text-3xl md:text-4xl">
          Bem vindo {user?.name}
        </h1>
        <Link
          href="/dashboard/create"
          className="bg-violet-500 hover:bg-violet-600 text-white font-semibold p-2 uppercase"
        >
          Cadastrar Posts
        </Link>
      </div>
      <DataTable columns={columns} data={posts?.posts || []} />
    </>
  )
}
