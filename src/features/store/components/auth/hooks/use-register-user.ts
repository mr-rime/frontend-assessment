import { useUserAuthStore } from "@/features/store/store/user-auth.store";
import { useMutation } from "@tanstack/react-query";
import { registerUserService } from "../api/auth.api";

export const useRegisterUser = () => {
    const login = useUserAuthStore((state) => state.login);

    return useMutation({
        mutationFn: registerUserService,
        onSuccess: (data) => {
            login({
                ...data,
                name: `${data.firstName} ${data.lastName}`,
            });
        },
    });
};
