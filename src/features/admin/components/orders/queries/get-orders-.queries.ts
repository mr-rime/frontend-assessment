import { queryOptions, type UseQueryOptions } from "@tanstack/react-query";
import type { ConvertPropToString, LocalOrder } from "@/shared/types";
import { getOrders } from "../api/get-orders";


export function getOrdersQueryOptions<
    T = ConvertPropToString<LocalOrder, "customer">[],
    TError = Error
>(
    options?: Omit<
        UseQueryOptions<T, TError, T, ["orders"]>,
        "queryKey" | "queryFn"
    >
) {
    return queryOptions({
        ...options,
        queryKey: ["orders"],
        queryFn: getOrders,
    });
}


