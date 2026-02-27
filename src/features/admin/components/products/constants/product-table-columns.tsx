
import { Button } from "@/shared/components/ui/button"
import { Checkbox } from "@/shared/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/shared/components/ui/dropdown-menu"
import type { ColumnDef } from "@tanstack/react-table"
import { ChevronRight, MoreHorizontal, Trash } from "lucide-react"
import type { ProductType } from "../types"
import { DataTableColumnHeader } from "@/shared/components/data-table"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/components/ui/tooltip"
import { formatNumberToUSD } from "@/lib/format-number-to-usd"

export const productTableColumns: ColumnDef<ProductType>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: ({ column }) => <DataTableColumnHeader column={column} title="ID" />,
    },
    {
        accessorKey: "image",
        header: () => <div className="text-center">Image</div>,
        cell: ({ row }) => {
            const image = row.original.image
            return (
                <div className="flex items-center justify-center">
                    <img src={image} alt="product-image" className="h-15 w-15 rounded-sm" />
                </div>
            )
        },
        enableColumnFilter: false
    },
    {
        accessorKey: "name",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
        cell: ({ row }) => {
            const name = row.original.name
            return (
                <Button
                    variant="ghost"
                    size="sm"
                    className="-ml-3 h-10 focus-visible:ring-0"
                >
                    <span>{name}</span> <ChevronRight size={18} className="text-muted-foreground" />
                </Button>
            )
        }
    },

    {
        accessorKey: "price",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Price" />,
        cell: ({ row }) => {
            const price = row.original.price
            return (
                <div className="font-medium">{formatNumberToUSD(price)}</div>
            )
        },
        enableColumnFilter: false
    },

    {
        accessorKey: "stock",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Stock" />,
        enableColumnFilter: false
    },

    {
        accessorKey: "category",
        header: "Category",
    },

    {
        accessorKey: "description",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Description" />,
        cell: ({ row }) => {
            const description = row.original.description
            return (
                <Tooltip>
                    <TooltipTrigger><div className="text-muted-foreground">{description.slice(0, 40) + "..."}</div></TooltipTrigger>
                    <TooltipContent>
                        <p>{description}</p>
                    </TooltipContent>
                </Tooltip>
            )
        }
    },

    {
        accessorKey: "Acions",
        id: "actions",
        enableColumnFilter: false,
        enableSorting: false,
        enableHiding: false,
        cell: () => {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem variant="destructive" className="cursor-pointer"><Trash className="mr-2" /><span>Delete</span></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]