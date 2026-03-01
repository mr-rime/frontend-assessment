import type { Customer } from "@/features/admin/components/customers/schemas";
import type { Product } from "@/features/admin/components/products/schemas";

export interface CartItem {
    product: Product;
    customer?: Customer;
    quantity: number;
}