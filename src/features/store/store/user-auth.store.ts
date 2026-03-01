import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
    firstName: string;
    lastName: string;
    email: string;
};

export type UserAuthState = {
    isAuthenticated: boolean;
    user: User | null;
    login: (user: User) => void;
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
