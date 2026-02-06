import { useQuery } from "@tanstack/react-query";
import { userService } from "@/services/user.service";

export const useUsers = (search: string = "") => {
    return useQuery({
        queryKey: ["users", search],
        queryFn: () => userService.getAll(search),
        enabled: search.length > 0,
    });
};
