import "./Home.css"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1 className="home-title">Hola, soy <span>Brais Garrido</span></h1>
                <h2 className="home-subtitle">Mobile developer & QA tester</h2>
                
                <p className="home-description">
                    Desarrollador de aplicacoones móviles para iOS y Android
                    con experiencia en testing manual y automatizado.
                    Bienvenido a mi portfolio.
                </p>

                <div className="home-buttons">
                    <Link to="/mobile" className="home-btn">Proyectos mobile</Link>
                    <Link to="/qa" className="home-btn">Proyectos QA</Link>
                    <Link to="/star" className="home-btn primary">Proyecto estrella</Link>
                </div>

                <div className="home-social">
                    <a href="https://github.com/BraisGarrido" target="_blank">Github</a>
                    <a href="www.linkedin.com/in/brais-garrido" target="_blank">LinkedIn</a>
                    <a href="mailto:braisgb@gmail.com">Email</a>
                </div>
            </div>
        </div>
    );
}