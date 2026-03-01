import { wait } from "@/shared/lib/wait";
import type { LoginUserFormData, RegisterUserFormData } from "../schemas/auth.schemas";

const MOCK_USERS_KEY = "mock_store_users";

const getStoredUsers = (): Record<string, RegisterUserFormData> => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem(MOCK_USERS_KEY) : null;
    return stored ? JSON.parse(stored) : {};
};

const saveUsers = (users: Record<string, RegisterUserFormData>) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(users));
    }
};

export const loginUserService = async (data: LoginUserFormData) => {
    await wait(1000);

    const users = getStoredUsers();
    const user = users[data.email];

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

    const users = getStoredUsers();

    if (users[data.email]) {
        throw new Error("User with this email already exists");
    }

    users[data.email] = data;
    saveUsers(users);

    return {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
    };
};
