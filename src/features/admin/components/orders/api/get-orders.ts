import { wait } from "@/shared/lib/wait";
import type { LocalOrder } from "@/shared/types";

export async function getOrders() {
    const orders = window.localStorage.getItem("orders");
    const parsedOrders: LocalOrder[] = orders ? JSON.parse(orders) : [];
    await wait(1000);
    return parsedOrders.map((order) => ({
        ...order,
        customer: order.customer.name,
        createdAt: order.createdAt ? new Date(order.createdAt) : new Date(),
        updatedAt: order.updatedAt ? new Date(order.updatedAt) : new Date(),
    }));
}