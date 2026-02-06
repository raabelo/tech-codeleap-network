"use client";

import { authService } from "@/services/auth.service";
import { removeUser, setUser } from "@/utils/cookies/user";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

// Helper para extrair a mensagem de erro do backend
function getErrorMessage(err: unknown): string {
    if (axios.isAxiosError(err)) {
        return err.response?.data?.error || err.message || "Unknown error";
    }
    if (err instanceof Error) return err.message;
    return "Unknown error";
}

export function useAuth() {
    return useMutation<string, Error, string>({
        mutationFn: async (username) => {
            const normalized = username.trim().toLowerCase();

            try {
                const res = await authService.login(normalized);
                if (res.status >= 400) {
                    throw new Error("Login failed");
                }
                return normalized;
            } catch (err: unknown) {
                if (axios.isAxiosError(err) && err.response?.status === 404) {
                    const res = await authService.connect(normalized);
                    if (res.status >= 400) {
                        throw new Error("Connect failed");
                    }
                    return normalized;
                }
                throw new Error(getErrorMessage(err));
            }
        },

        onSuccess: (username) => {
            setUser(username);
        },
    });
}

export function useLogout() {
    return useMutation<string, Error, string>({
        mutationFn: async (username) => {
            const normalized = username.trim().toLowerCase();

            const res = await authService.logout(normalized);
            if (res.status >= 400) {
                throw new Error("Logout failed");
            }
            removeUser();

            return normalized;
        },

        onSuccess: (username) => {
            setUser(username);
        },
    });
}
