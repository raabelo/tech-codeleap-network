"use client";

import { useState, useRef, forwardRef } from "react";
import { User } from "@prisma/client";
import { useUsers } from "@/hooks/queries/useUsers";
import { getMentionQuery } from "@/utils/functions/getMentionQuery";
import MentionBackdrop from "./MentionBackdrop";
import MentionDropdown from "./MentionDropdown";

interface MentionTextareaProps extends Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    "onChange" | "value"
> {
    value: string | number | readonly string[];
    onChange: (val: string) => void;
    placeholder?: string;
    className?: string;
    rows?: number;
}

const MentionTextarea = forwardRef<HTMLTextAreaElement, MentionTextareaProps>(
    ({ value, onChange, placeholder, className = "", rows = 4, ...props }, ref) => {
        const [query, setQuery] = useState<string | undefined>(undefined);
        const [cursorPosition, setCursorPosition] = useState(0);
        const internalRef = useRef<HTMLTextAreaElement>(null);
        const backdropRef = useRef<HTMLDivElement>(null!);

        const setRefs = (element: HTMLTextAreaElement | null) => {
            internalRef.current = element;
            if (typeof ref === "function") {
                ref(element);
            } else if (ref) {
                (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = element;
            }
        };

        const { data: users } = useUsers(query);

        const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            const val = e.target.value;
            onChange(val);

            const pos = e.target.selectionStart;
            setCursorPosition(pos);
            setQuery(getMentionQuery(val, pos));
        };

        const handleSelectUser = (user: User) => {
            const stringValue = String(value);
            const textBeforeCursor = stringValue.slice(0, cursorPosition);
            const lastAt = textBeforeCursor.lastIndexOf("@");
            const textAfterCursor = stringValue.slice(cursorPosition);

            const newValue =
                stringValue.slice(0, lastAt) + "@" + user.username + " " + textAfterCursor;

            onChange(newValue);
            setQuery(undefined);

            setTimeout(() => {
                if (internalRef.current) {
                    internalRef.current.focus();
                    const newCursorPos = lastAt + user.username.length + 2;
                    internalRef.current.setSelectionRange(newCursorPos, newCursorPos);
                }
            }, 0);
        };

        const handleScroll = () => {
            if (backdropRef.current && internalRef.current) {
                backdropRef.current.scrollTop = internalRef.current.scrollTop;
            }
        };

        return (
            <div className={`relative w-full ${className}`}>
                <div className="relative w-full group">
                    <MentionBackdrop value={value} backdropRef={backdropRef} />
                    <textarea
                        ref={setRefs}
                        value={value}
                        onChange={handleInput}
                        onScroll={handleScroll}
                        placeholder={placeholder}
                        rows={rows}
                        className="relative w-full h-full p-3 bg-transparent border border-neutral-dark rounded-lg resize-none font-sans text-base leading-normal"
                        {...props}
                    />
                </div>

                {query !== undefined && (
                    <MentionDropdown users={users} onSelect={handleSelectUser} />
                )}
            </div>
        );
    },
);

MentionTextarea.displayName = "MentionTextarea";
export default MentionTextarea;
