"use client";

import { ReactNode } from "react";
import Button from "../atoms/Button";
import { useLang } from "@/hooks/useLang";

interface ModalProps {
    title: string;
    content?: ReactNode;
    submitButton: ReactNode;
    handleClose?: () => void;
}

export default function Modal({ title, content, submitButton, handleClose }: ModalProps) {
    const t = useLang();

    return (
        <div className="w-dvw h-dvh bg-neutral-dark/80 fixed top-0 left-0 flex items-center justify-center" onClick={handleClose}>
            <div className="rounded-2xl bg-white border border-neutral-dark w-xl max-w-xl p-6 flex flex-col gap-8">
                <p className="text-xl font-bold">{title}</p>
                {content && <div>{content}</div>}
                <div className="flex flex-row gap-4 mr-0 ml-auto">
                    <Button variant="info" onClick={handleClose}>
                        {t("codeleap.common.cancel")}
                    </Button>
                    {submitButton}
                </div>
            </div>
        </div>
    );
}
