import React from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "success" | "info";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
    primary: "bg-primary hover:bg-blue-700 text-white disabled:bg-neutral-light",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    success: "bg-green-600 hover:bg-green-700 text-white",
    info: "bg-sky-500 hover:bg-sky-600 text-white",
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
                px-8 py-1.5 rounded-lg transition-colors
                ${VARIANT_STYLES[variant]}
                ${props.className}
            `}
        >
            {children}
        </button>
    );
}
