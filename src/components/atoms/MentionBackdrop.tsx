import { useMemo } from "react";

interface MentionBackdropProps {
    value: string | number | readonly string[];
    backdropRef: React.RefObject<HTMLDivElement>;
}

export default function MentionBackdrop({ value, backdropRef }: MentionBackdropProps) {
    const highlightedText = useMemo(() => {
        const parts = String(value).split(/(@\w+)/g);
        return parts.map((part, i) => {
            if (part.startsWith("@") && part.length > 1) {
                return (
                    <span key={i} className="text-primary font-bold">
                        {part}
                    </span>
                );
            }
            return <span key={i}>{part}</span>;
        });
    }, [value]);

    return (
        <div
            ref={backdropRef}
            className="absolute inset-0 z-10 w-full h-full p-3 whitespace-pre-wrap wrap-break-word border border-transparent overflow-hidden text-transparent pointer-events-none font-sans text-base leading-normal"
            aria-hidden="true"
        >
            {highlightedText}
            {String(value).endsWith("\n") && <br />}
        </div>
    );
}
