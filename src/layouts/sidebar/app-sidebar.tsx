import * as React from "react"


import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/shared/components/ui/sidebar"
import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import { SIDEBAR_DATA } from "./sidebar.constants"
import { SidebarTop } from "./sidebar-top"


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarTop />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={SIDEBAR_DATA.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={SIDEBAR_DATA.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}