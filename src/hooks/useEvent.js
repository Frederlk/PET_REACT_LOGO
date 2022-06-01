import { useEffect, useRef } from "react";

export const useEvent = (eventName, eventHandler) => {
    const cbRef = useRef(eventHandler);

    useEffect(() => {
        cbRef.current = eventHandler;
    });

    useEffect(() => {
        const cb = (e) => cbRef.current(e);
        window.addEventListener(eventName, cb);
        return () => {
            window.removeEventListener(eventName, cb);
        };
    }, [eventName]);
    return;
};
