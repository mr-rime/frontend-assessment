import { useUserAuthStore } from "@/features/store/store/user-auth.store";
import { useMutation } from "@tanstack/react-query";
import { loginUserService } from "../api/auth.api";
import { goeyToast } from "goey-toast";
import { useCartStore } from "@/features/store/components/cart/store/cart.store";

export const useLoginUser = () => {
    const login = useUserAuthStore((state) => state.login);
    const syncCartWithCustomer = useCartStore((state) => state.syncCartWithCustomer);

    return useMutation({
        mutationFn: loginUserService,
        onSuccess: (data) => {
            const customer = {
                ...data,
                name: `${data.firstName} ${data.lastName}`,
            };
            login(customer);
            syncCartWithCustomer(customer);
            goeyToast.success("Login successful");
        },
    });
};