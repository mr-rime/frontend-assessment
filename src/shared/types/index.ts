import type { Order } from "@/features/admin/components/orders/schemas";
import type { Product } from "@/features/admin/components/products/schemas";

export type ConvertPropsToUnion<T> = {
    [K in keyof T]: K
}[keyof T]


export type ConvertPropToString<T, Prop extends keyof T> = {
    [K in keyof T]: K extends Prop ? string : T[K]
}


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