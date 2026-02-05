import { useCallback, useRef } from "react";

export function useDebouncedCallback<T extends (...args: unknown[]) => void>(
    callback: T,
    delay = 500,
) {
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const debouncedFn = useCallback(
        (...args: Parameters<T>) => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }

            timerRef.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay],
    );

    return debouncedFn;
}
