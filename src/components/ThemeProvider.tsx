'use client'
import { useState, useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Before mounted, just render children so SSR=CSR
    if (!mounted) {
        return <>{children}</>;
    }

    // After mounted, wrap in the real provider so it can add `dark` class
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}