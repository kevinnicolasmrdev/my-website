import { useEffect } from "react";
import { useProject } from "../contexto/ProjectContext";
import ProjectCardPublic from '../components/ProjectCardPublic'
import '../components/componentStyle/projectPublicCard.css'


function PortfolioPage() {
  const { getPublicProjects , projects } = useProject();

  useEffect(() => {
    getPublicProjects();
  },[]);


  return (
    <div className="proyectosContainer">
      {projects.map((project) => (
        <ProjectCardPublic project={project} key={project._id}/>
        ))}
    </div>
  );
}

export default PortfolioPage;