import { BookOpenText } from 'lucide-react'
import LinkNavigation from '../link-navigation'

type MenuDashboardProps = {
  title: string
}

export default function MenuDashboard({ title }: MenuDashboardProps) {
  return (
    <>
      <h4 className="border-b border-bgray-200 text-xs font-light leading-7 text-bgray-700 dark:border-darkblack-400 dark:text-bgray-50">
        {title}
      </h4>
      <nav className="grid items-start  font-medium mt-6 mb-12 gap-2 ">
        <LinkNavigation
          link="/dashboard"
          icon={<BookOpenText size={22} />}
          title="Dashboard"
        />
      </nav>
    </>
  )
}
