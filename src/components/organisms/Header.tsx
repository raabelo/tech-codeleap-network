"use client";

import { useLang } from "@/hooks/useLang";
import ModalLogout from "./ModalLogout";

export default function Header() {
    const t = useLang();

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <header className="bg-primary text-white w-full py-7 px-9 text-2xl font-bold border-b border-neutral-dark sticky top-0 flex flex-row justify-between z-20">
            <h1 tabIndex={0} onClick={backToTop} className="cursor-pointer w-fit">
                {t("codeleap.home.header.title")}
            </h1>
            <ModalLogout />
        </header>
    );
}
