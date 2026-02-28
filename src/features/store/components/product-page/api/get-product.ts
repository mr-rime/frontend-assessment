import { db } from "@/db";
import { wait } from "@/shared/lib/wait";

export const getProduct = async (productId: string) => {
    await wait(1000);
    return db.products.find(p => p.id === productId);
};