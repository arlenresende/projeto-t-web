interface ContentAuthProps {
  content: string
}

export default function ContentAuth({ content }: ContentAuthProps) {
  return <p className=" leading-relaxed text-gray-800">{content}</p>
}
