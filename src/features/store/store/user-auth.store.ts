import type { Customer } from "@/features/admin/components/customers/schemas";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UserAuthState = {
    isAuthenticated: boolean;
    user: Customer | null;
    login: (user: Customer) => void;
    logout: () => void;
};

export const useUserAuthStore = create<UserAuthState>()(
    persist(
        (set) => ({
            isAuthenticated: false,
            user: null,
            login: (user) => set({ isAuthenticated: true, user }),
            logout: () => set({ isAuthenticated: false, user: null }),
        }),
        {
            name: "store-user-auth",
        }
    )
);
