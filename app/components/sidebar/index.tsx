import Link from 'next/link'
import MenuDashboard from '../menu'
import LogoGen from '../logo'

export default function Sidebar() {
  return (
    <div className="hidden  md:block">
      <div className="flex h-full flex-col gap-2">
        <div className="flex items-center  border-b border-r border-b-[#F7F7F7] border-r-[#F7F7F7]  px-4 h-[108px] lg:px-6">
          <Link
            href="/dashboard"
            className="w-full flex items-center gap-2 font-semibold justify-center"
          >
            <h2 className=" text-2xl font-bold text-primary md:text-3xl flex items-center justify-center gap-1">
              <LogoGen
                color1="#000"
                color2="#000"
                color3="#000"
                width="180px"
                height="100px"
              />
            </h2>
          </Link>
        </div>
        <div className="flex-1 px-8">
          <MenuDashboard title="Menu" />
        </div>
      </div>
    </div>
  )
}
