import { type Table } from "@tanstack/react-table"
import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from "lucide-react"
import { Button } from "../ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { useNavigate, useSearch, } from "@tanstack/react-router"
import { useDebounce } from "@/shared/hooks/use-debounce"


interface DataTablePaginationProps<TData> {
    table: Table<TData>
}


export function DataTablePagination<TData>({
    table,
}: DataTablePaginationProps<TData>) {
    const navigate = useNavigate();
    const search = useSearch({ strict: false });
    const debouncedPagination = useDebounce(() => {
        navigate({
            to: ".",
            search: (prev: Record<string, unknown>) => ({
                ...prev,
                page: search.page,
                pageSize: table.getState().pagination.pageSize,
            }),
        })
    })

    return (
        <div className="flex flex-col items-center justify-between gap-4 px-2 mt-5 sm:flex-row sm:gap-0">
            <div className="text-muted-foreground flex-1 text-sm text-center sm:text-left">
                {table.getFilteredSelectedRowModel().rows.length} of{" "}
                {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:space-x-6 lg:space-x-8">
                <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium">Rows per page</p>
                    <Select
                        value={`${table.getState().pagination.pageSize}`}
                        onValueChange={(value) => {
                            table.setPageSize(Number(value))
                            debouncedPagination()
                        }}
                    >
                        <SelectTrigger className="h-8 w-17.5">
                            <SelectValue placeholder={table.getState().pagination.pageSize} />
                        </SelectTrigger>
                        <SelectContent side="top">
                            {[10, 20, 25, 30, 40, 50].map((pageSize) => (
                                <SelectItem key={pageSize} value={`${pageSize}`}>
                                    {pageSize}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
                    <div className="flex items-center justify-center text-sm font-medium min-w-25">
                        Page {table.getState().pagination.pageIndex + 1} of{" "}
                        {table.getPageCount()}
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="hidden size-8 lg:flex"
                            onClick={() => {
                                table.setPageIndex(0)
                                debouncedPagination()
                            }}
                            disabled={!table.getCanPreviousPage()}
                        >
                            <span className="sr-only">Go to first page</span>
                            <ChevronsLeft />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="size-8"
                            onClick={() => {
                                table.previousPage()
                                debouncedPagination()
                            }}
                            disabled={!table.getCanPreviousPage()}
                        >
                            <span className="sr-only">Go to previous page</span>
                            <ChevronLeft />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="size-8"
                            onClick={() => {
                                table.nextPage()
                                debouncedPagination()
                            }}
                            disabled={!table.getCanNextPage()}
                        >
                            <span className="sr-only">Go to next page</span>
                            <ChevronRight />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="hidden size-8 lg:flex"
                            onClick={() => {
                                table.setPageIndex(table.getPageCount() - 1)
                                debouncedPagination()
                            }}
                            disabled={!table.getCanNextPage()}
                        >
                            <span className="sr-only">Go to last page</span>
                            <ChevronsRight />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
