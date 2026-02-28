import { AdminWrapper } from "@/shared/components/admin-wrapper";
import { DataTable } from "@/shared/components/data-table";
import { customersTableColumns } from "../constants";
import { db } from "@/db";

export function Customers() {
    return (
        <AdminWrapper title="Customers">
            <DataTable
                columns={customersTableColumns}
                data={db.customers || []}
            />
        </AdminWrapper>
    )
}
