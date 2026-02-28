import { queryOptions, type UseQueryOptions } from "@tanstack/react-query";
import { getAdminProducts } from "../api/get-products";
import type { Product } from "../schemas/product.schema";


export function getProductsQueryOptions<T = Product[], TError = Error>(
    options?: Omit<UseQueryOptions<Product[], TError, T>, "queryKey" | "queryFn">
) {
    return queryOptions({
        ...options,
        queryKey: ["admin-products"],
        queryFn: getAdminProducts,
    });
}
;