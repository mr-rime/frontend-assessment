import { wait } from "@/shared/lib/wait";
import { db } from "@/db";
import type { Product } from "@/features/admin/components/products/schemas";
import type { Paginated } from "@/shared/types";

export const getProducts = async ({ currentPage, pageSize }: { currentPage: number, pageSize: number }): Promise<Paginated<Product[]>> => {
    const products = db.products || [];
    const totalItems = products.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const offset = (currentPage - 1) * pageSize;
    const paginatedItems = products.slice(offset, offset + pageSize);
    await wait(1000);
    return {
        currentPage,
        pageSize,
        totalItems,
        totalPages,
        items: paginatedItems
    }
};