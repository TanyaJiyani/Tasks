import { useEffect, useRef } from "react";

export default function useNonInitialRenderHook(callback, dependencies) {
    const initialRender = useRef(true);

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            callback();
        }
    }, [callback, dependencies]);
};
