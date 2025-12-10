import  { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import "./Navbar.css"

export default function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className="navbar">
            <Link to='/' className="nav-logo">Brais</Link>

            <div className="nav-links">
                <Link to="/mobile">Mobile</Link>
                <Link to="/qa">QA Testing</Link>
                <Link to="/star">Proyecto estrella</Link>
            </div>

            <button className="theme-btn" onClick={toggleTheme}>
                {theme === "light" ? "🌙" : "☀️"}
            </button>
        </nav>
    );
}
