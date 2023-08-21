import { useProject } from "../contexto/ProjectContext";

function ProjectCard({ project }) {
  const { deleteProject } = useProject();

  return (
    <div className="proyectos">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>{project.IMG}</p>
      <button
        onClick={() => {
          deleteProject(project._id);
        }}
      >
        Delet
      </button>
    </div>
  );
}

export default ProjectCard;
