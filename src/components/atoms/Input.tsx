import { forwardRef } from "react";

type BaseProps = {
    multiline?: boolean;
};

type InputProps = BaseProps & React.InputHTMLAttributes<HTMLInputElement>;

type TextareaProps = BaseProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

type Props = InputProps | TextareaProps;

const baseClasses = "border border-neutral-dark rounded-lg w-full py-1.5 px-3";

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
    ({ multiline, className, ...props }, ref) => {
        if (multiline) {
            return (
                <textarea
                    ref={ref as React.Ref<HTMLTextAreaElement>}
                    {...(props as TextareaProps)}
                    className={`${baseClasses} ${className}`}
                />
            );
        }

        return (
            <input
                ref={ref as React.Ref<HTMLInputElement>}
                {...(props as InputProps)}
                type={(props as InputProps).type || "text"}
                className={`${baseClasses} ${className}`}
            />
        );
    },
);

Input.displayName = "Input";

export default Input;
