import { useEffect, useState } from "react";
import "./ThemeToggle.css";

export default function ThemeToggle() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "system"
    );

    useEffect(() => {
        if (theme === "system") {
            const systemDark = window.matchMedia("(prefers-color-scheme: dark").matches;
            document.documentElement.setAttribute("data-home", systemDark ? "dark" : "light");
        } else {
            document.documentElement.setAttribute("data-theme", theme);
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev =>
            prev === "light" ? "dark":
            prev === "dark" ? "system":
            "light"
        );
    };

    return (
        <button className="theme-toggle" onClick={toggleTheme}>
            <span className={`toggle-indicator ${theme}`}></span>
        </button>
    );
}