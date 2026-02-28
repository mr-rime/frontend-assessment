import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/shared/components/ui/sidebar"
import { LayoutDashboard } from "lucide-react"

export function SidebarTop() {

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                    <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                        <LayoutDashboard size={19} />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-medium">Admin</span>
                        <span className="truncate text-xs">Dashboard</span>
                    </div>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}