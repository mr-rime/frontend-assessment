import { useUserAuthStore } from "@/features/store/store/user-auth.store";
import { useMutation } from "@tanstack/react-query";
import { loginUserService } from "../api/auth.api";
import { goeyToast } from "goey-toast";

export const useLoginUser = () => {
    const login = useUserAuthStore((state) => state.login);

    return useMutation({
        mutationFn: loginUserService,
        onSuccess: (data) => {
            login({
                ...data,
                name: `${data.firstName} ${data.lastName}`,
            });
            goeyToast.success("Login successful");
        },
    });
};