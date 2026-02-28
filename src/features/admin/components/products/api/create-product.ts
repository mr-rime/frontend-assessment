import { wait } from "@/shared/lib/wait";
import type { Product } from "../schemas/product.schema";
import { db } from "@/db";

export const createProduct = async (data: Product) => {
    await wait(1000)
    const newProduct = {
        ...data,
        id: Math.random().toString(36).substring(2, 9),
    };
    db.products.push(newProduct);
    return newProduct;
};