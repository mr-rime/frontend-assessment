import { useUserAuthStore } from "@/features/store/store/user-auth.store";
import { useMutation } from "@tanstack/react-query";
import { loginUserService } from "../api/auth.api";

export const useLoginUser = () => {
    const login = useUserAuthStore((state) => state.login);

    return useMutation({
        mutationFn: loginUserService,
        onSuccess: (data) => {
            login(data);
        },
    });
};