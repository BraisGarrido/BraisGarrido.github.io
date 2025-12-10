import ProjectCard from "../components/ProjectCard";
import mobileProjects from "../assets/mobileProjectsData";

export default function ProjectsMobile() {
    return (
        <>
            <h2>Proyectos mobile</h2>

            <div className="projects-grid">
                {mobileProjects.map((proj, i) => (
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