import { useCallback, useEffect, useRef } from "react";

export function useDebounce<T extends (...args: any[]) => void>(
    callback: T,
    wait: number = 300
): (...args: Parameters<T>) => void {
    const callbackRef = useRef<T>(callback);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const debounced = useCallback(
        (...args: Parameters<T>) => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = setTimeout(() => {
                callbackRef.current(...args);
            }, wait);
        },
        [wait]
    );

    return debounced;
}