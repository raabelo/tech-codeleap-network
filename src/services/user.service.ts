import { api } from "@/lib/axios";
import { User } from "@prisma/client";

export const userService = {
    getAll: async (search?: string) =>
        await api.get<User[]>("/users", { params: { search } }).then((res) => res.data),
};