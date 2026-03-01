import type { Product } from "@/features/admin/components/products/schemas";
import { queryOptions, type UseQueryOptions } from "@tanstack/react-query";
import { getProducts } from "../api/get-products";
import type { Paginated } from "@/shared/types";

type ProductsQueryKey = ["products", { currentPage: number; pageSize: number; sortBy?: string; order?: 'asc' | 'desc'; category?: string[]; q?: string }];

export function getProductsQueryOptions<
    T = Paginated<Product[]>,
    TError = Error
>(
    params: { currentPage: number; pageSize: number; sortBy?: string; order?: 'asc' | 'desc'; category?: string[]; q?: string },
    options?: Omit<
        UseQueryOptions<Paginated<Product[]>, TError, T, ProductsQueryKey>,
        "queryKey" | "queryFn"
    >
) {
    return queryOptions({
        ...options,
        queryKey: ["products", params],
        queryFn: ({ queryKey }) => {
            const [, { currentPage, pageSize, sortBy, order, category, q }] = queryKey;
            return getProducts({ currentPage, pageSize, sortBy, order, category, q });
        },
    });
}


