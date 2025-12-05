import ProjectCard from "../components/ProjectCard";
import qaProjects from '../assets/qaProjectsData';

export default function ProjectsQA() {
    return (
        <section id="projects-qa">
            <h2>QA Testing</h2>
            <div className="projects-grid">
                {qaProjects.map(project => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
}