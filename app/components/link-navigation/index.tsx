'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type LinkNavigationProps = {
  link: string
  icon: React.ReactNode
  title: string
}

export default function LinkNavigation({
  link,
  icon,
  title,
}: LinkNavigationProps) {
  const pathname = usePathname()
  return (
    <Link href={link}>
      <div
        className={cn(
          'flex gap-2 items-center justify-start hover:bg-muted hover:text-primary transition duration-300 py-2 px-2 rounded-md',
          pathname === link && 'text-primary bg-muted',
        )}
      >
        <span className="text-primary">{icon}</span>
        <span className="font-normal text-base ">{title}</span>
      </div>
    </Link>
  )
}
