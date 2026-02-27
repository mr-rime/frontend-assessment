import type { FileRouteTypes } from "@/routeTree.gen"
import type { LucideIcon } from "lucide-react"


type UrlType = FileRouteTypes["to"]

export type SidebarUser = {
    name: string
    email: string
    avatar: string
}

export type SidebarTeam = {
    name: string
    logo: LucideIcon
    plan: "Free" | "Startup" | "Enterprise"
}

export type SidebarNavSubItem = {
    title: string
    url: UrlType
}

export type SidebarNavItem = {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    items: SidebarNavSubItem[]
}


export type SidebarProject = {
    name: string
    url: UrlType
    icon: LucideIcon
}

export type SidebarData = {
    user: SidebarUser
    teams: SidebarTeam[]
    navMain: SidebarNavItem[]
}