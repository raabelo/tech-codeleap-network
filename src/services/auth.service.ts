import { api } from "@/lib/axios";

type ConnectResponse = {
    message: string;
};

type LoginResponse = {
    message: string;
};

export const authService = {
    connect(username: string) {
        return api.post<ConnectResponse>("/auth", {
            username,
        });
    },

    login(username: string) {
        return api.post<LoginResponse>("/auth/login", {
            username,
        });
    },
};
