import "./componentStyle/projectPublicCard.css";

function ProjectPublicCard({ project }) {

  return (
    <div className="publicProyectos">
      <div className="publicData">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
      <div className="imgContainerPublic">
        <a target="_blank" href={project.urlProyect}>
          <img src={project.IMG} className="imgProject" />
        </a>
      </div>
    </div>
  );
}

export default ProjectPublicCard;