interface SidebarItemProps{
    icon: React.ReactNode
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
    icon,
}): React.JSX.Element => {
    return (
        <div className="text-muted-foreground hover:text-primary transition duration-300 cursor-pointer">
            {icon}
        </div>
    )
}