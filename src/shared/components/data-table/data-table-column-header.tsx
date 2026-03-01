import { type Column } from "@tanstack/react-table"
import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react"

import { cn } from "@/shared/lib/utils"
import { Button } from "../ui/button"
import * as React from "react"
import { useNavigate } from "@tanstack/react-router"
import { useDebounce } from "@/shared/hooks/use-debounce"


interface DataTableColumnHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
    column: Column<TData, TValue>
    title: string
}


export function DataTableColumnHeader<TData, TValue>({
    column,
    title,
    className,
}: DataTableColumnHeaderProps<TData, TValue>) {
    const navigate = useNavigate();

    const debouncedSort = useDebounce((value) => {
        navigate({
            to: ".",
            search: (prev) => ({
                ...prev,
                order: value,
                sortBy: column.id,
            }),
        })
    })

    if (!column.getCanSort()) {
        return <div className={cn(className)}>{title}</div>
    }

    return (
        <div className={cn("flex items-center gap-2", className)}>
            <Button
                variant="ghost"
                size="sm"
                className="-ml-3 h-8 focus-visible:ring-0"
                onClick={() => {
                    column.toggleSorting()
                    debouncedSort(column.getIsSorted() === "asc" ? "desc" : "asc")
                }}
            >
                <span>{title}</span>
                {column.getIsSorted() === "desc" ? (
                    <ArrowDown />
                ) : column.getIsSorted() === "asc" ? (
                    <ArrowUp />
                ) : (
                    <ChevronsUpDown />
                )}
            </Button>
        </div>
    )
}
