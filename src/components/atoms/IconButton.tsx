import { ButtonHTMLAttributes } from "react";

export default function IconButton({
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={`text-white w-fit bg-primary ${props.className} group hover:opacity-40`}
        >
            {children}
        </button>
    );
}
