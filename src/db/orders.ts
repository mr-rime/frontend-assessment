import type { Order } from "@/features/admin/components/orders/schemas";


export const ORDER_DATA: Order[] = [
    {
        id: "ord_001",
        status: "pending",
        customer: "Alice Johnson",
        total: 149.99,
        createdAt: new Date("2026-02-20T10:15:00Z"),
        updatedAt: new Date("2026-02-20T10:15:00Z"),
    },
    {
        id: "ord_002",
        status: "processing",
        customer: "Bob Smith",
        total: 89.5,
        createdAt: new Date("2026-02-21T09:30:00Z"),
        updatedAt: new Date("2026-02-21T10:00:00Z"),
    },
    {
        id: "ord_003",
        status: "shipped",
        customer: "Charlie Davis",
        total: 249.0,
        createdAt: new Date("2026-02-18T14:45:00Z"),
        updatedAt: new Date("2026-02-19T08:20:00Z"),
    },
    {
        id: "ord_004",
        status: "delivered",
        customer: "Diana Evans",
        total: 59.99,
        createdAt: new Date("2026-02-15T12:00:00Z"),
        updatedAt: new Date("2026-02-17T16:10:00Z"),
    },
    {
        id: "ord_005",
        status: "cancelled",
        customer: "Ethan Brown",
        total: 120.75,
        createdAt: new Date("2026-02-22T11:25:00Z"),
    },
]