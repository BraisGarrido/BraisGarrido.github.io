import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-links">
                <Link to="/">Inicio</Link>
                <Link to="/mobile">Mobile</Link>
                <Link to="/qa">QA Testing</Link>
                <Link to="/star">Proyecto estrella</Link>
            </div>

                <ThemeToggle />
        </nav>
    );
}