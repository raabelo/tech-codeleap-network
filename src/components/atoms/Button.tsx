import React from "react";

type ButtonVariant = "primary" | "danger" | "success" | "info";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
    primary: "bg-primary hover:bg-blue-700 text-white disabled:bg-neutral-light",
    danger: "bg-danger hover:bg-red-700 text-white disabled:bg-neutral-light",
    success: "bg-success hover:bg-green-700 text-white disabled:bg-neutral-light",
    info: "bg-transparent border border-neutral-dark text-black disabled:bg-neutral-light",
};

export default function Button({
    variant = "primary",
    type = "button",
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            type={type}
            className={`
                px-8 py-1.5 rounded-lg transition-colors font-bold
                ${VARIANT_STYLES[variant]}
                ${props.className}
            `}
        >
            {children}
        </button>
    );
}
