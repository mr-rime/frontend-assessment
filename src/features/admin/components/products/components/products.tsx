import { AdminWrapper } from "@/shared/components/admin-wrapper";
import { DataTable } from "@/shared/components/data-table/data-table";
import { productTableColumns } from "../constants";
import { db } from "@/db";


export function Products() {
    return (
        <AdminWrapper title="Products">
            <div>
                <DataTable
                    columns={productTableColumns}
                    data={db.products}
                />
            </div>
        </AdminWrapper>
    )
}

