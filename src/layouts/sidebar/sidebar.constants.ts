

import {
    AudioWaveform,
    Command,
    GalleryVerticalEnd,
    ShoppingBag,
    Tag,
    Users,
} from "lucide-react"
import type { SidebarData } from "./sidebar.types"


export const SIDEBAR_DATA: SidebarData = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Acme Inc",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "Free",
        },
    ],

    navMain: [
        {
            title: "Catalog",
            url: "#",
            icon: Tag,
            isActive: true,
            items: [
                {
                    title: "Products",
                    url: "/admin/products",
                },

            ],
        },
        {
            title: "Sales",
            url: "#",
            icon: ShoppingBag,
            items: [
                {
                    title: "Orders",
                    url: "/admin/orders",
                },
            ],
        },
        {
            title: "Customers",
            url: "#",
            icon: Users,
            items: [
                {
                    title: "Customers",
                    url: "/admin/customers",
                },
            ],
        },
    ],
}