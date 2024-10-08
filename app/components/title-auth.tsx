interface TitleAuthProps {
  title: string
}

export function TitleAuth({ title }: TitleAuthProps) {
  return (
    <h1 className="mt-2 text-2xl font-bold text-violet-600 sm:text-3xl md:text-4xl">
      {title}
    </h1>
  )
}
