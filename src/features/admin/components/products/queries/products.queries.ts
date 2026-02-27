import { queryOptions, type UseQueryOptions } from "@tanstack/react-query";
import { getProducts } from "../api/get-products";
import type { Product } from "../schemas/product.schema";

export function getProductsQueryOptions<TData = Product[], TError = Error>(
    options?: Omit<UseQueryOptions<Product[], TError, TData>, "queryKey" | "queryFn">
) {
    return queryOptions({
        ...options,
        queryKey: ["products"],
        queryFn: getProducts,
    });
}
