import { forwardRef, useEffect, useRef, useState } from "react";
import MentionTextarea from "./MentionTextarea";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
    multiline?: boolean;
    value: string;
    onChange: (value: string) => void;
    rows?: number;
    icon?: React.ReactNode;
}

const baseClasses = "border border-neutral-dark rounded-lg w-full py-1.5 px-3";

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
    ({ multiline, className, value, onChange, maxLength, icon, ...props }, ref) => {
        const [isFocused, setIsFocused] = useState(false);
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

        const handleMentionChange = (val: string) => {
            onChange(val);

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
                    <MentionTextarea
                        ref={combinedRef as React.RefObject<HTMLTextAreaElement>}
                        className={className || ""}
                        maxLength={maxLength}
                        value={value}
                        onChange={handleMentionChange}
                        {...(props as Omit<
                            React.TextareaHTMLAttributes<HTMLTextAreaElement>,
                            "onChange"
                        >)}
                    />
                ) : (
                    <div
                        className={`${baseClasses} ${className || ""} flex flex-row gap-2 ${isFocused ? "border-primary" : ""}`}
                    >
                        {icon}
                        <input
                            onBlur={() => setIsFocused(false)}
                            onFocus={() => setIsFocused(true)}
                            ref={combinedRef as React.RefObject<HTMLInputElement>}
                            className="size-full outline-0"
                            maxLength={maxLength}
                            value={value}
                            onChange={handleChange}
                            {...props}
                        />
                    </div>
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
