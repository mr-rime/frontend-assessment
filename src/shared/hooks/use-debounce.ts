import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useDebounce<T extends (...args: any[]) => void>(
    callback: T,
    wait: number = 300
): (...args: Parameters<T>) => void {
    const callbackRef = React.useRef<T>(callback);
    const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

    React.useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const debounced = React.useCallback(
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