import { Link } from "react-router-dom";
import { useProject } from "../contexto/ProjectContext";
import "./componentStyle/projectCard.css";
import { AiFillCloseCircle, AiFillEdit } from "react-icons/ai";

function ProjectCard({ project }) {
  const { deleteProject } = useProject();

  return (
        <table className="tables hoverCelda">
          <tbody>
          <tr className="filasConatiner2">
            <td className="celdaConteiner">
              <p>{project.title}</p>
            </td>
            <td className="celdaConteiner">
              <p>{project.description}</p>
            </td>
            <td className="celdaConteiner">
            <p>{project.urlProyect}</p>
            </td>
            <td className="celdaConteinerImage">
            <p>{project.IMG}</p>
            </td>
            <td className="buttonDelete">
            <button
            onClick={() => {
              deleteProject(project._id);
            }}
          >
            <AiFillCloseCircle />
          </button>
            </td>
            <td className="buttonEdit">
            <Link to={`/project/${project._id}`}>
            <AiFillEdit />
          </Link>
            </td>
          </tr>
          </tbody>
        </table>
  );
}

export default ProjectCard;
