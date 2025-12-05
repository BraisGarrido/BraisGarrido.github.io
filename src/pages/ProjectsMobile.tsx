import ProjectCard from "../components/ProjectCard";
import mobileProjects from '../assets/mobileProjectsData';


export default function ProjectsMobile() {
    return (
        <section id="projects-mobile">
            <h2>Apps moviles</h2>
            <div className="projects-grid">
                {mobileProjects.map(project => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
}
