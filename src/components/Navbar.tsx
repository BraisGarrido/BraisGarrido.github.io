import './Navbar.css';

export default function Navbar() {
    return(
        <nav className='navbar'>
            <h1>Mi portfolio</h1>
            <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>Sobre mí</a></li>
                <li><a href='#projects-mobile'>App móviles</a></li>
                <li><a href='#projects-qa'>QA Testing</a></li>
                <li><a href='#project-star'>Proyecto estrella</a></li>
                <li><a href='#contact'>Contacto</a></li>
            </ul>
        </nav>
    );
}