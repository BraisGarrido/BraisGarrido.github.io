import ProjectCard from "../components/ProjectCard";
import starProjectData from "../assets/starProjectData";

export default function ProjectStar() {
    return (
        <>
            <h2>Proyecto estrella</h2>
            {starProjectData.map((proj, i) => (
                <ProjectCard
                    key={i}
                    title={proj.title}
                    description={proj.description}
                    link={proj.link}
                    image={proj.image}
                />
            ))}
        </>
    );
}