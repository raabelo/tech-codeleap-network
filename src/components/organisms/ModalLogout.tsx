"use client";

import { useState, useSyncExternalStore } from "react";
import Button from "@/components/atoms/Button";
import { useLang } from "@/hooks/useLang";
import Modal from "../molecules/Modal";
import { getUser } from "@/utils/cookies/user";
import toast from "react-hot-toast";
import Loader from "../atoms/Loader";
import { useLogout } from "@/hooks/mutations/useAuth";
import { useRouter } from "next/navigation";
import { IconLogout } from "@tabler/icons-react";

const emptySubscribe = () => () => {};

export default function ModalLogout() {
    const t = useLang();
    const logout = useLogout();
    const router = useRouter();

    const user = useSyncExternalStore(
        emptySubscribe,
        () => getUser(),
        () => null,
    );

    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!user) return null;

    const handleLogout = () => {
        logout.mutate(user, {
            onSuccess: () => {
                setIsModalOpen(false);
                toast.success(t("codeleap.home.header.logout.toast.success"));
                router.replace("/login");
            },
            onError: (err: Error) => {
                console.error(err);
                toast.error(t("codeleap.home.header.logout.toast.fail") + ":\n" + err.message);
            },
        });
    };

    return (
        <>
            <button type="button" onClick={() => setIsModalOpen(true)}>
                <IconLogout />
            </button>
            <Modal
                isOpen={isModalOpen}
                close={() => setIsModalOpen(false)}
                title={t("codeleap.home.modal.logout.title")}
                submitButton={
                    <Button variant="danger" onClick={handleLogout} disabled={logout.isPending}>
                        {logout.isPending ? <Loader /> : t("codeleap.home.modal.logout.submit")}
                    </Button>
                }
            />
        </>
    );
}
