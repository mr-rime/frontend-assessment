import { wait } from "@/shared/lib/wait";
import type { Product } from "../schemas/product.schema";
import { db } from "@/db";

export const getAdminProducts = async (): Promise<Product[]> => {
    await wait(1000);
    return db.products;
};