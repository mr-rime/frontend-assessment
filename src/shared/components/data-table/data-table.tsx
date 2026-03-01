/* eslint-disable react-hooks/incompatible-library */

import {
    type ColumnDef,
    type ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    type SortingState,
    useReactTable,
    type VisibilityState,
} from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import * as React from "react"
import { DataTablePagination } from "./data-table-pagination"
import { DataTableViewOptions } from "./data-table-view-options"
import { DataTableFilter } from "./data-table-filter"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"
import { Skeleton } from "../ui/skeleton"
import { useSearch } from "@tanstack/react-router"


type FacetedFilter = {
    columnId: string
    title: string
    options: { label: string, value: string }[]
}

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[],
    isLoading?: boolean
    facetedFilters?: FacetedFilter[]
}


export function DataTable<TData, TValue>({
    columns,
    data,
    isLoading,
    facetedFilters,
}: DataTableProps<TData, TValue>) {
    const search = useSearch({ strict: false });

    const pageSize = (search.pageSize as number | undefined) ?? 10
    const pageIndex = ((search.page as number | undefined) ?? 1) - 1
    const sortBy = (search.sortBy as string | undefined) ?? ""
    const order = (search.order as "asc" | "desc" | undefined) ?? "asc"
    const filterBy = (search.filterBy as string | undefined) ?? ""
    const q = (search.q as string | undefined) ?? ""
    const filters = (search.filters as Record<string, string[]> | undefined) ?? {}

    const initialColumnFilters: ColumnFiltersState = []
    if (q && filterBy) {
        initialColumnFilters.push({ id: filterBy, value: q })
    }
    Object.entries(filters).forEach(([id, value]) => {
        if (value && value.length > 0) {
            initialColumnFilters.push({ id, value })
        }
    })

    const [sorting, setSorting] = React.useState<SortingState>(
        sortBy ? [{ id: sortBy, desc: order === "desc" }] : []
    )
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        initialColumnFilters
    )
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        autoResetPageIndex: false,
        initialState: {
            pagination: { pageIndex, pageSize },
        },
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        }
    })


    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2">
                <DataTableFilter table={table} />
                {facetedFilters?.map((filter) => (
                    <DataTableFacetedFilter
                        key={filter.columnId}
                        column={table.getColumn(filter.columnId)}
                        title={filter.title}
                        options={filter.options}
                    />
                ))}
                <div className="ml-auto">
                    <DataTableViewOptions table={table} />
                </div>
            </div>
            <div className="overflow-hidden rounded-md border">
                <Table>
                    <TableHeader className="bg-muted">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {isLoading ? (
                            Array.from({ length: 5 }).map((_, rowIndex) => (
                                <TableRow key={rowIndex}>
                                    {columns.map((_, cellIndex) => (
                                        <TableCell key={cellIndex}>
                                            <Skeleton className="h-6 w-full" />
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <DataTablePagination table={table} />
        </div>
    )
}