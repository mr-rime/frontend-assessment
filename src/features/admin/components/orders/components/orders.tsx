import { AdminWrapper } from "@/shared/components/admin-wrapper";
import { DataTable } from "@/shared/components/data-table";
import { ordersTableColumns } from "../constants/orders-table.columns";
import { db } from "@/db";
import { OrderStatusEnum } from "../schemas/order.schema";

export function Orders() {
    const statuses = OrderStatusEnum.options;

    return (
        <AdminWrapper title="Orders">
            <DataTable
                columns={ordersTableColumns}
                data={db.orders || []}
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
