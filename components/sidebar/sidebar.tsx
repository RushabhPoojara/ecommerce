import { Flower, Image as ImageIcon, Infinity, Settings, Shirt, Zap } from "lucide-react"
import { SidebarItem } from "@/components/sidebar/sidebar-item"
import { ThemeToggle } from "../ui/theme-toggle"

export const Sidebar = (): React.JSX.Element => {
    return (
        <div className="bg-black h-full w-full py-10 px-4 flex flex-col justify-between">
          <div className="flex flex-col items-center gap-10">
            <SidebarItem icon={<Flower className="text-primary"/>}/>
            <SidebarItem icon={<Zap/>}/>
            <SidebarItem icon={<ImageIcon />}/>
            <SidebarItem icon={<Infinity/>}/>
            <SidebarItem icon={<Shirt/>}/>
          </div>
          <div className="flex flex-col items-center justify-end gap-4">
            <ThemeToggle/>
            <SidebarItem icon={<Settings/>}/>
          </div>
        </div>
    )
}