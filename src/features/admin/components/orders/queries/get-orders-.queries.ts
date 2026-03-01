import { queryOptions, type UseQueryOptions } from "@tanstack/react-query";
import type { ConvertPropToString, LocalOrder } from "@/shared/types";
import { getOrders } from "../api/get-orders";


export function getOrdersQueryOptions(
    options?: Omit<
        UseQueryOptions<ConvertPropToString<LocalOrder, "customer">[], Error, ConvertPropToString<LocalOrder, "customer">[], ["orders"]>,
        "queryKey" | "queryFn"
    >
) {
    return queryOptions({
        ...options,
        queryKey: ["orders"],
        queryFn: getOrders,
    });
}


