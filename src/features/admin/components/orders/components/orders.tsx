import { AdminWrapper } from "@/shared/components/admin-wrapper";
import { DataTable } from "@/shared/components/data-table";
import { ordersTableColumns } from "../constants/orders-table.columns";
import { OrderStatusEnum } from "../schemas/order.schema";
import { useQuery } from "@tanstack/react-query";
import { getOrdersQueryOptions } from "../queries/get-orders-.queries";

export function Orders() {
    const { data: orders, isLoading } = useQuery(getOrdersQueryOptions())
    const statuses = OrderStatusEnum.options;

    return (
        <AdminWrapper title="Orders">
            <DataTable
                columns={ordersTableColumns}
                data={orders || []}
                isLoading={isLoading}
                facetedFilters={[
                    {
                        columnId: "status",
                        title: "Status",
                        options: statuses.map((status) => ({
                            label: status,
                            value: status,
                        })),
                    },
                ]}
            />
        </AdminWrapper>
    )
}
