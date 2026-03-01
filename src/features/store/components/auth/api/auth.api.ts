import { wait } from "@/shared/lib/wait";
import type { LoginUserFormData, RegisterUserFormData } from "../schemas/auth.schemas";

const MOCK_USERS: Record<string, RegisterUserFormData> = {};

export const loginUserService = async (data: LoginUserFormData) => {
    await wait(1000);

    const user = MOCK_USERS[data.email];

    if (!user || user.password !== data.password) {
        throw new Error("Invalid email or password");
    }

    return {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
    };
};

export const registerUserService = async (data: RegisterUserFormData) => {
    await wait(1000);

    if (MOCK_USERS[data.email]) {
        throw new Error("User with this email already exists");
    }

    MOCK_USERS[data.email] = data;

    return {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
    };
};
