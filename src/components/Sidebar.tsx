import Link from 'next/link'
import { Home, HardDrive, Users, Clock, Star, Trash, Plus, LucideIcon } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className="drive-sidebar">
      <div className="p-4">
        <button className="flex items-center justify-center w-full p-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50">
          <Plus className="w-5 h-5 mr-2" />
          New
        </button>
      </div>
      <nav className="space-y-1">
        <SidebarLink href="/" icon={Home} text="Home" />
        <SidebarLink href="/my-drive" icon={HardDrive} text="My Drive" />
        <SidebarLink href="/shared" icon={Users} text="Shared with me" />
        <SidebarLink href="/recent" icon={Clock} text="Recent" />
        <SidebarLink href="/starred" icon={Star} text="Starred" />
        <SidebarLink href="/trash" icon={Trash} text="Trash" />
      </nav>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>3.5 GB of 15 GB used</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '25%' }}></div>
        </div>
      </div>
    </div>
  )
}

interface SidebarLinkProps {
  href: string
  icon: LucideIcon
  text: string
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, icon: Icon, text }) => (
  <Link href={href} className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
    <Icon className="w-5 h-5 mr-3 text-gray-500" />
    {text}
  </Link>
)

export default Sidebar
