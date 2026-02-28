import type { Product } from "@/features/admin/components/products/schemas";
import { queryOptions, type UseQueryOptions } from "@tanstack/react-query";
import { getProduct } from "../api";

export function getProductQueryOptions<T = Product | undefined, TError = Error>(
    productId: string,
    options?: Omit<
        UseQueryOptions<Product | undefined, TError, T, ["product", string]>,
        "queryKey" | "queryFn"
    >
) {
    return queryOptions({
        ...options,
        queryKey: ["product", productId],
        queryFn: () => getProduct(productId),
    });
}