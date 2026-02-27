import { AdminWrapper } from "@/shared/components/admin-wrapper";
import { DataTable } from "@/shared/components/data-table/data-table";
import { productTableColumns } from "../constants";
import { NewProductDialog } from "./new-product-dialog";
import { useQuery } from "@tanstack/react-query";
import { getProductsQueryOptions } from "../queries/products.queries";


export function Products() {
    const { data: products, isLoading } = useQuery(getProductsQueryOptions())

    return (
        <AdminWrapper title="Products" controls={
            <NewProductDialog />
        }>
            <div>
                <DataTable
                    columns={productTableColumns}
                    data={products || []}
                    isLoading={isLoading}
                />
            </div>
        </AdminWrapper>
    )
}

