import type { Column } from "@tanstack/react-table";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Funnel } from "lucide-react";

interface DataTableFacetedFilterProps<TData, TValue> {
    column?: Column<TData, TValue>
    title?: string
    options: {
        label: string
        value: string
    }[]
}

export function DataTableFacetedFilter<TData, TValue>({
    column,
    title,
    options,
}: DataTableFacetedFilterProps<TData, TValue>) {
    const selectedValues = new Set(column?.getFilterValue() as string[])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-9 gap-2">
                    <Funnel className="h-4 w-4" />
                    {title}
                    {selectedValues.size > 0 && (
                        <span className="ml-1 rounded-sm bg-secondary px-2 py-0.5 text-xs font-medium">
                            {selectedValues.size}
                        </span>
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuLabel>{title}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {options.map((option) => {
                    const isSelected = selectedValues.has(option.value)
                    return (
                        <DropdownMenuCheckboxItem
                            key={option.value}
                            checked={isSelected}
                            onCheckedChange={(checked) => {
                                const nextValues = new Set(selectedValues)
                                if (checked) {
                                    nextValues.add(option.value)
                                } else {
                                    nextValues.delete(option.value)
                                }
                                const filterValues = Array.from(nextValues)
                                column?.setFilterValue(
                                    filterValues.length ? filterValues : undefined
                                )
                            }}
                        >
                            <span className="capitalize">{option.label}</span>
                        </DropdownMenuCheckboxItem>
                    )
                })}
                {selectedValues.size > 0 && (
                    <>
                        <DropdownMenuSeparator />
                        <div
                            className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground justify-center font-medium"
                            onClick={() => column?.setFilterValue(undefined)}
                        >
                            Clear filters
                        </div>
                    </>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
