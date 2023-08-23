import { useEffect } from "react";
import { useProject } from "../contexto/ProjectContext";
import ProjectCard from '../components/ProjectCard'
import '../components/componentStyle/projectCard.css'
import {Link} from 'react-router-dom'


function ProjectPage() {
  const { getProjects, projects } = useProject();

  useEffect(() => {
    getProjects();
  }, [getProjects]);


  if(projects.length === 0) return(<h1>No Projects</h1>)

  return (
    <div className="generalContiner">
    <div className="gestorPersonal">
    <h1> Gestor de proyectos web</h1>
    <p>Tabla de contenido sobre mis ultimos proyectos y data del mismo.</p>
    <Link to="/add-project">AGREGAR PROYECTO</Link>
    </div>
    <div className="proyectosContainer">
      <table className="tables filasConatiner">
      <tbody>
      <tr>
            <td>Titulo</td>
            <td>Descripcion del proyecto</td>
            <td>URL del Proyecto</td>
            <td>Link de la imagen</td>
        </tr>
      </tbody>
      </table>
      {projects.map((project) => (
        <ProjectCard project={project} key={project._id}/>
        ))}
    </div>
        </div>
  );
}

export default ProjectPage;
