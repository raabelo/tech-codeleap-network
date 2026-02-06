import { api } from "@/lib/axios";

type ConnectResponse = {
    message: string;
};

type LoginResponse = {
    message: string;
};

export const authService = {
    connect: async (username: string) =>
        await api.post<ConnectResponse>("/auth", {
            username,
        }),

    login: async (username: string) =>
        await api.post<LoginResponse>("/auth/login", {
            username,
        }),

    logout: async (username: string) =>
        await api.post("/auth/logout", {
            username,
        }),
};
