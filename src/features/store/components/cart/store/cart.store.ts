import { create } from "zustand";
import type { Product } from "@/features/admin/components/products/schemas";
import type { Customer } from "@/features/admin/components/customers/schemas";
import type { CartItem } from "../types";

interface CartState {
    cart: CartItem[];
    addToCart: (product: Product, customer?: Customer) => void;
    removeFromCart: (product: Product, customer?: Customer) => void;
    updateQuantity: (product: Product, quantity: number, customer?: Customer) => void;
    clearCart: () => void;
}


export const useCartStore = create<CartState>()((set) => ({
    cart: [],
    addToCart: (product, customer) => set((state) => {
        const existingItem = state.cart.find(
            (item) => item.product.id === product.id && item.customer?.id === customer?.id
        );

        if (existingItem) {
            return {
                cart: state.cart.map((item) =>
                    item.product.id === product.id && item.customer?.id === customer?.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };
        }

        return {
            cart: [...state.cart, { product, customer, quantity: 1 }],
        };
    }),
    removeFromCart: (product, customer) => set((state) => ({
        cart: state.cart.filter(
            (item) => !(item.product.id === product.id && item.customer?.id === customer?.id)
        ),
    })),
    updateQuantity: (product, quantity, customer) => set((state) => ({
        cart: state.cart.map((item) =>
            item.product.id === product.id && item.customer?.id === customer?.id
                ? { ...item, quantity: Math.max(1, quantity) }
                : item
        ),
    })),
    clearCart: () => set({ cart: [] }),
}));