import type { Table } from "@tanstack/react-table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Funnel } from "lucide-react";
import { Input } from "../ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import React, { useState } from "react";
import { useDebounce } from "@/shared/hooks/use-debounce";

export function DataTableFilter<TData>({ table }: { table: Table<TData> }) {
    const filterableColumns = React.useMemo(() => {
        return table
            .getAllColumns()
            .filter(
                (column) =>
                    typeof column.accessorFn !== "undefined" &&
                    column.getCanFilter()
            );
    }, [table]);

    const firstColumnId = filterableColumns[0]?.id ?? "";

    const [currentFilter, setCurrentFilter] = useState(firstColumnId);
    const [inputValue, setInputValue] = useState("");

    const debouncedSetFilter = useDebounce((value) => {
        table.getColumn(currentFilter)?.setFilterValue(value);
    }, 200);

    React.useEffect(() => {
        setInputValue(
            (table.getColumn(currentFilter)?.getFilterValue() as string) ?? ""
        );
    }, [currentFilter, table]);

    return (
        <div className="flex items-center gap-2">
            <Input
                placeholder={`Filter ${currentFilter}...`}
                value={inputValue}
                onChange={(event) => {
                    const value = event.target.value;
                    setInputValue(value);
                    debouncedSetFilter(value);
                }}
                className="max-w-sm"
            />

            <DropdownMenu>
                <Tooltip>
                    <DropdownMenuTrigger asChild>
                        <TooltipTrigger asChild>
                            <Button
                                variant="outline"
                                size="sm"
                                className="ml-auto hidden h-9 lg:flex"
                            >
                                <Funnel />
                            </Button>
                        </TooltipTrigger>
                    </DropdownMenuTrigger>

                    <TooltipContent>
                        <p>Add filter</p>
                    </TooltipContent>
                </Tooltip>

                <DropdownMenuContent align="start">
                    {filterableColumns.map((column) => (
                        <DropdownMenuItem
                            key={column.id}
                            onClick={() => setCurrentFilter(column.id)}
                            className="capitalize"
                        >
                            {column.id}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}