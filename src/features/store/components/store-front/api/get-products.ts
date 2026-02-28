import { wait } from "@/shared/lib/wait";
import { db } from "@/db";
import type { Product } from "@/features/admin/components/products/schemas";
import type { Paginated } from "@/shared/types";

export const getProducts = async ({
    currentPage,
    pageSize,
    sortBy,
    order
}: {
    currentPage: number,
    pageSize: number,
    sortBy?: string,
    order?: 'asc' | 'desc'
}): Promise<Paginated<Product[]>> => {
    let products = [...(db.products || [])];

    if (sortBy === 'price') {
        products.sort((a, b) => {
            if (order === 'asc') return a.price - b.price;
            return b.price - a.price;
        });
    }

    if (sortBy === 'name') {
        products.sort((a, b) => {
            if (order === 'asc') return a.name.localeCompare(b.name);
            return b.name.localeCompare(a.name);
        });
    }

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