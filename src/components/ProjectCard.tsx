import "./ProjectCard.css";

export interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

export default function ProjectCard({
  title,
  description,
  link,
  image,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <img className="project-card-image" src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>

      <a href={link} target="_blank" rel="noopener noreferrer">
        Ver proyecto →
      </a>
    </div>
  );
}