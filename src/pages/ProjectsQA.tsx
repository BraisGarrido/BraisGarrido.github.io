import ProjectCard from "../components/ProjectCard";
import qaProjects from '../assets/qaProjectsData';

export default function ProjectsQA() {
    return (
        <>
            <h2>Proyectos QA</h2>

            <div className="projects-grid">
                {qaProjects.map((proj, i) => (
                    <ProjectCard
                        key={i}
                        title={proj.title}
                        description={proj.description}
                        link={proj.link}
                        image={proj.image}
                    />
                ))}
            </div>        
        </>
    );
}