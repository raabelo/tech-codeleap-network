"use client";

import { ReactNode } from "react";
import Button from "@/components/atoms/Button";
import Loader from "@/components/atoms/Loader";

interface FormProps {
    title: ReactNode;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    submitLabel: ReactNode;
    isSubmitting?: boolean;
    submitDisabled?: boolean;
    children: ReactNode;
}

export default function Form({
    title,
    onSubmit,
    submitLabel,
    isSubmitting = false,
    submitDisabled = false,
    children,
}: FormProps) {
    return (
        <section className="w-full bg-white border border-neutral-light rounded-2xl p-6 flex flex-col gap-6">
            <h1 className="font-bold text-xl">{title}</h1>

            <form onSubmit={onSubmit} className="flex flex-col gap-4">
                {children}

                <Button
                    variant="primary"
                    type="submit"
                    className="ml-auto"
                    disabled={submitDisabled || isSubmitting}
                >
                    {isSubmitting ? <Loader /> : submitLabel}
                </Button>
            </form>
        </section>
    );
}
