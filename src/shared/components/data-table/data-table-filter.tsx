import type { Table } from "@tanstack/react-table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Funnel } from "lucide-react";
import { Input } from "../ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import React, { useState } from "react";
import { useDebounce } from "@/shared/hooks/use-debounce";
import { useNavigate, useSearch } from "@tanstack/react-router";

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

    const navigate = useNavigate();
    const search = useSearch({ strict: false });

    const firstColumnId = filterableColumns[0]?.id ?? "";
    const [currentFilter, setCurrentFilter] = useState(search.filterBy ?? firstColumnId);
    const [inputValue, setInputValue] = useState(search.q ?? "");


    const debouncedSearch = useDebounce((value: string, filterBy: string) => {
        const targetCol = table.getColumn(filterBy);
        targetCol?.setFilterValue(value);

        navigate({
            to: ".",
            search: {
                order: search.order,
                sortBy: search.sortBy,
                page: search.page,
                q: value,
                pageSize: table.getState().pagination.pageSize,
                filterBy,
            }
        });
    }, 300);

    return (
        <div className="flex items-center gap-2">
            <Input
                placeholder={`Filter ${currentFilter}...`}
                value={inputValue}
                onChange={(event) => {
                    const value = event.target.value;
                    setInputValue(value);
                    debouncedSearch(value, currentFilter);
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
                        <p>Filter by field</p>
                    </TooltipContent>
                </Tooltip>

                <DropdownMenuContent align="start">
                    {filterableColumns.map((column) => (
                        <DropdownMenuItem
                            key={column.id}
                            onClick={() => {
                                filterableColumns.forEach((col) => {
                                    col.setFilterValue("");
                                });
                                setCurrentFilter(column.id);
                                setInputValue("");

                                const nextSearch = {
                                    order: search.order,
                                    sortBy: search.sortBy,
                                    page: search.page,
                                    q: "",
                                    pageSize: table.getState().pagination.pageSize,
                                    filterBy: column.id,
                                };
                                navigate({ to: ".", search: nextSearch });
                            }}
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