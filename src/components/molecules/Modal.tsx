"use client";

import { ReactNode } from "react";
import Button from "../atoms/Button";
import { useLang } from "@/hooks/useLang";

interface ModalProps {
    title: string;
    content?: ReactNode;
    submitButton: ReactNode;
    isOpen: boolean;
    close: () => void;
}

export default function Modal({ title, content, submitButton, isOpen, close }: ModalProps) {
    const t = useLang();

    if (!isOpen) return null;

    return (
        <div className="w-dvw h-dvh fixed top-0 left-0 flex items-center justify-center z-50">
            <div className="rounded-2xl bg-white text-black text-base font-normal border border-neutral-dark w-xl max-w-[80svw] p-6 flex flex-col gap-6 z-10">
                <p className="text-xl font-bold">{title}</p>
                {content && <div>{content}</div>}
                <div className="flex flex-row gap-4 mr-0 ml-auto">
                    <Button variant="info" onClick={close}>
                        {t("codeleap.common.cancel")}
                    </Button>
                    {submitButton}
                </div>
            </div>
            <div className="absolute size-full left-0 top-0 bg-neutral-dark/80" onClick={close} />
        </div>
    );
}
