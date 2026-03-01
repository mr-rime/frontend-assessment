import { queryOptions, type UseQueryOptions } from "@tanstack/react-query";
import type { LocalOrder } from "@/shared/types";
import { getOrders } from "../api/get-orders";


export function getOrdersQueryOptions<
    T = LocalOrder[],
    TError = Error
>(
    options?: Omit<
        UseQueryOptions<LocalOrder[], TError, T, ["orders"]>,
        "queryKey" | "queryFn"
    >
) {
    return queryOptions({
        ...options,
        queryKey: ["orders"],
        queryFn: () => {
            return getOrders();
        },
    });
}


