import type { Order } from "@/features/admin/components/orders/schemas";
import type { Product } from "@/features/admin/components/products/schemas";

export type ConvertPropToString<T> = {
    [K in keyof T]: K
}[keyof T]

export type Paginated<T = unknown> = {
    currentPage: number;
    pageSize: number,
    totalItems: number,
    totalPages: number,
    items: T
}

export type LocalOrder = Order & {
    products: Product[];
}