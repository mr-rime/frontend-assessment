"use client"

import { type Table } from "@tanstack/react-table"
import { Settings2 } from "lucide-react"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"



export function DataTableViewOptions<TData>({
    table,
}: {
    table: Table<TData>
}) {
    return (
        <DropdownMenu>
            <Tooltip>
                <TooltipTrigger>
                    <DropdownMenuTrigger>
                        <Button
                            variant="outline"
                            size="sm"
                            className="ml-auto hidden h-9 lg:flex"
                        >
                            <Settings2 />
                        </Button>
                    </DropdownMenuTrigger>
                    <TooltipContent>
                        <p>Column settings</p>
                    </TooltipContent>
                </TooltipTrigger>
            </Tooltip>
            <DropdownMenuContent align="end" className="w-37.5">
                {table
                    .getAllColumns()
                    .filter(
                        (column) =>
                            typeof column.accessorFn !== "undefined" && column.getCanHide()
                    )
                    .map((column) => {
                        return (
                            <DropdownMenuCheckboxItem
                                key={column.id}
                                className="capitalize"
                                checked={column.getIsVisible()}
                                onCheckedChange={(value) => column.toggleVisibility(!!value)}
                            >
                                {column.id}
                            </DropdownMenuCheckboxItem>
                        )
                    })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
