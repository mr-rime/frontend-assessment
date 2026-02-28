import type { Customer } from "@/features/admin/components/customers/schemas";

export const CUSTOMER_DATA: Customer[] = [
    {
        id: "cus_001",
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        createdAt: new Date("2026-02-10T09:15:00Z"),
        updatedAt: new Date("2026-02-12T14:30:00Z"),
    },
    {
        id: "cus_002",
        name: "Benjamin Carter",
        email: "ben.carter@example.com",
        createdAt: new Date("2026-02-11T11:20:00Z"),
        updatedAt: new Date("2026-02-13T08:45:00Z"),
    },
    {
        id: "cus_003",
        name: "Charlotte Lee",
        email: "charlotte.lee@example.com",
        createdAt: new Date("2026-02-14T16:00:00Z"),
    },
    {
        id: "cus_004",
        name: "Daniel Martinez",
        email: "daniel.martinez@example.com",
        createdAt: new Date("2026-02-18T10:05:00Z"),
        updatedAt: new Date("2026-02-20T12:10:00Z"),
    },
    {
        id: "cus_005",
        name: "Eva Thompson",
        email: "eva.thompson@example.com",
        createdAt: new Date("2026-02-22T13:40:00Z"),
    },
]