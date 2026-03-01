import type { ColumnDef } from "@tanstack/react-table";
import type { Order } from "../schemas/order.schema";
import { Button } from "@/shared/components/ui/button";
import { formatNumberToUSD } from "@/shared/lib/format-number-to-usd";
import { DataTableColumnHeader } from "@/shared/components/data-table";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { formatDate } from "@/shared/lib/format-date";
import type { ConvertPropToString } from "@/shared/types";



export const ordersTableColumns: ColumnDef<ConvertPropToString<Order, "customer">>[] = [
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
        header: ({ column }) => <DataTableColumnHeader column={column} title="ID" />
    },

    {
        accessorKey: "status",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "customer",
        header: "Customer",
        cell: ({ row }) => {
            const customer = row.original.customer
            return (
                <Button
                    variant="ghost"
                    size="sm"
                    className="-ml-3 h-10 focus-visible:ring-0"
                >
                    <span>{customer}</span>
                </Button>
            )
        }
    },
    {
        accessorKey: "total",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Total" />,
        cell: ({ row }) => {
            const total = row.original.total
            return (
                <div className="font-medium">{formatNumberToUSD(total)}</div>
            )
        },
        enableColumnFilter: false
    },

    {
        accessorKey: "createdAt",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Created At" />,
        cell: ({ row }) => {
            const createdAt = row.original.createdAt
            return (
                <div className="font-medium">{formatDate(createdAt)}</div>
            )
        },
        enableColumnFilter: false
    },

    {
        accessorKey: "updatedAt",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Updated At" />,
        cell: ({ row }) => {
            const updatedAt = row.original.updatedAt
            return (
                <div className="font-medium">{formatDate(updatedAt)}</div>
            )
        },
        enableColumnFilter: false
    }

]