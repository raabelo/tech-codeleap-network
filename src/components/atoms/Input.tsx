import { forwardRef, useEffect, useRef, useState } from "react";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
    multiline?: boolean;
    value: string;
    onChange: (value: string) => void;
    rows?: number;
}

const baseClasses = "border border-neutral-dark rounded-lg w-full py-1.5 px-3";

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
    ({ multiline, className, value, onChange, maxLength, ...props }, ref) => {
        const [hasVerticalScroll, setHasVerticalScroll] = useState(false);

        const localRef = useRef<HTMLTextAreaElement | HTMLInputElement>(null);
        const combinedRef =
            (ref as React.RefObject<HTMLInputElement | HTMLTextAreaElement>) || localRef;

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            onChange(e.target.value);

            if (multiline && combinedRef?.current) {
                const el = combinedRef.current;
                setHasVerticalScroll(el.scrollHeight > el.clientHeight);
            }
        };

        useEffect(() => {
            if (multiline && combinedRef?.current) {
                const el = combinedRef.current;
                setHasVerticalScroll(el.scrollHeight > el.clientHeight);
            }
        }, [value, multiline]);

        const characterCounter = maxLength ? `${value.length}/${maxLength}` : undefined;

        return (
            <div className="relative w-full">
                {multiline ? (
                    <textarea
                        ref={combinedRef as React.RefObject<HTMLTextAreaElement>}
                        className={`${baseClasses} ${className || ""}`}
                        maxLength={maxLength}
                        value={value}
                        onChange={handleChange}
                        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                    />
                ) : (
                    <input
                        ref={combinedRef as React.RefObject<HTMLInputElement>}
                        className={`${baseClasses} ${className || ""}`}
                        maxLength={maxLength}
                        value={value}
                        onChange={handleChange}
                        {...props}
                    />
                )}
                {characterCounter && (
                    <span
                        className={`absolute ${multiline ? "bottom-2.5" : "bottom-1"} ${
                            hasVerticalScroll ? "right-4" : "right-2"
                        } text-xs opacity-50 text-neutral-dark`}
                    >
                        {characterCounter}
                    </span>
                )}
            </div>
        );
    },
);

Input.displayName = "Input";
export default Input;
