import { useUserAuthStore } from "@/features/store/store/user-auth.store";
import { useMutation } from "@tanstack/react-query";
import { registerUserService } from "../api/auth.api";
import { useCartStore } from "@/features/store/components/cart/store/cart.store";

export const useRegisterUser = () => {
    const login = useUserAuthStore((state) => state.login);
    const syncCartWithCustomer = useCartStore((state) => state.syncCartWithCustomer);

    return useMutation({
        mutationFn: registerUserService,
        onSuccess: (data) => {
            const customer = {
                ...data,
                name: `${data.firstName} ${data.lastName}`,
            };
            login(customer);
            syncCartWithCustomer(customer);
        },
    });
};
