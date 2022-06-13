import { useCallback } from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";

export default function useDebounce(callback, delay) {
    const timer = useRef();

    const debouncedCallback = useCallback((...args) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            callback(...args);
        }, delay);
    });

    return debouncedCallback;
}
