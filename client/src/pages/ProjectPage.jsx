import { useEffect } from "react";
import { useProject } from "../contexto/ProjectContext";
import "./pagesStyle/projectPage.css";
import ProjectCard from '../components/ProjectCard'

function ProjectPage() {
  const { getProjects, projects } = useProject();

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  if(projects.length === 0) return(<h1>No Projects</h1>)

  return (
    <div className="proyectosContainer">
      {projects.map((project) => (
        <ProjectCard project={project} key={project._id}/>
      ))}
    </div>
  );
}

export default ProjectPage;
