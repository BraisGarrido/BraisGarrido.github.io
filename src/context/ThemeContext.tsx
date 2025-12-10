import { createContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: "light",
    toggleTheme: () => {}
});

export function ThemeProvider({ children }: {children: ReactNode}) {
    const [theme, setTheme] = useState<Theme>("light");

    //Detectar tema del sistema
    useEffect(() => {
        const stored = localStorage.getItem("theme");
        if (stored === "light" || stored === "dark") {
            setTheme(stored);
        } else {
            const systemPreferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(systemPreferDark ? "dark" : "light");
        }
    }, []);

    //Aplicar tema al HTML y guardar
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}