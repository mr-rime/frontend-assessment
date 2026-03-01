import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface AdminUser {
    email: string;
    name: string;
}

export interface AdminAuthState {
    isAuthenticated: boolean;
    admin: AdminUser | null;
    login: (admin: AdminUser) => void;
    logout: () => void;
}

export const useAdminAuthStore = create<AdminAuthState>()(
    persist(
        (set) => ({
            isAuthenticated: false,
            admin: null,
            login: (admin) => set({ isAuthenticated: true, admin }),
            logout: () => set({ isAuthenticated: false, admin: null }),
        }),
        {
            name: 'admin-auth-storage',
        }
    )
);
