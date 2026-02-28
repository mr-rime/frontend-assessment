

import {
    ShoppingBag,
    Tag,
    Users,
} from "lucide-react"
import type { SidebarData } from "./sidebar.types"


export const SIDEBAR_DATA: SidebarData = {
    user: {
        name: "admin",
        email: "admin@gmail.com",
        avatar: "/avatars/admin",
    },

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