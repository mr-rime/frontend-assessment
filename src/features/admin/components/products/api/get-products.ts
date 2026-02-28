import { wait } from "@/shared/lib/wait";
import type { Product } from "../schemas/product.schema";
import { db } from "@/db";

export const getProducts = async (): Promise<Product[]> => {
    await wait(1000);
    return db.products;
};