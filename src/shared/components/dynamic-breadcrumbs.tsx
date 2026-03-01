import { useMatches, Link, } from "@tanstack/react-router"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/shared/components/ui/breadcrumb"
import React from "react"
import type { FileRouteTypes } from "@/routeTree.gen"



export function DynamicBreadcrumbs({ homePage }: { homePage?: FileRouteTypes["to"] }) {
    const matches = useMatches()

    const breadcrumbMatches = matches.filter((match) => {
        const path = match.pathname
        return path !== "/" && !path.includes("(") && !path.includes("_")
    })

    if (breadcrumbMatches.length === 0) return null

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink asChild>
                        <Link to={homePage || "/"}>Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {breadcrumbMatches.map((match, index) => {
                    const isLast = index === breadcrumbMatches.length - 1
                    const label = match.pathname.split("/").filter(Boolean).pop() || "Home"
                    const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1)

                    return (
                        <React.Fragment key={match.id}>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage>{capitalizedLabel}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink asChild>
                                        <Link to={match.pathname}>{capitalizedLabel}</Link>
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        </React.Fragment>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
