"use client";

import { authService } from "@/services/auth.service";
import { setUser } from "@/utils/cookies/user";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export function useAuth() {
    return useMutation({
        mutationFn: async (username: string) => {
            const normalized = username.trim();

            try {
                await authService.login(normalized);
                return normalized;
            } catch (err) {
                if (axios.isAxiosError(err) && err.response?.status === 404) {
                    await authService.connect(normalized);
                    return normalized;
                }
                throw err;
            }
        },

        onSuccess: (username) => {
            setUser(username);
        },
    });
}
