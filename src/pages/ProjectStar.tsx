import ProjectCard from "../components/ProjectCard";
import starProject from '../assets/starProjectData';

export default function ProjectStar() {
    return (
        <section id="projects-star">
            <h2>Proyecto estrella</h2>
            <div className="projects-grid">
                {starProject.map(project => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
}