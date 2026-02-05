"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUser, removeUser } from "@/utils/cookies/user";
import { useAuth } from "@/hooks/mutations/useAuth";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const auth = useAuth();

    useEffect(() => {
        const username = getUser();

        if (!username) {
            router.replace("/login");
            return;
        }

        auth.mutate(username, {
            onError: () => {
                removeUser();
                router.replace("/login");
            },
        });
    }, [router]);

    if (auth.isPending) {
        return null;
    }

    return <>{children}</>;
}
