import { Link } from "react-router-dom";
import { useProject } from "../contexto/ProjectContext";
import "./componentStyle/projectCard.css";
import { AiFillCloseCircle, AiFillEdit } from "react-icons/ai";

function ProjectCard({ project }) {
  const { deleteProject } = useProject();

  return (
    <div className="proyectos">
      <div className="proyectosData">
        <button
          onClick={() => {
            deleteProject(project._id);
          }}
        >
          <AiFillCloseCircle />
        </button>
        <Link to={`/project/${project._id}`}>
          <AiFillEdit />
        </Link>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div className="imgContainer">
        <a target="_blank" href={project.urlProyect}>
          <img src={project.IMG} className="imgProject" />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
