import type { ColumnDef } from "@tanstack/react-table";
import type { Customer } from "../schemas";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { DataTableColumnHeader } from "@/shared/components/data-table";
import { formatDate } from "@/shared/lib/format-date";



export const customersTableColumns: ColumnDef<Customer>[] = [
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
        accessorKey: "name",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
    },
    {
        accessorKey: "email",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
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
            const createdAt = row.original.createdAt
            return (
                <div className="font-medium">{formatDate(createdAt)}</div>
            )
        },
        enableColumnFilter: false
    }
]