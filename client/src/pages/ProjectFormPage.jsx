import { useProject } from "../contexto/ProjectContext.jsx";
import "./pagesStyle/projectFormPage.css";
import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom'

function ProjectFormPage() {
  const { register, handleSubmit } = useForm();
  const {createProject} = useProject();
  const navigate = useNavigate()

  const onSubmit = handleSubmit((data)=>{
    createProject(data)
    navigate('/project')
  })

  return (
    <>
      <div className="containerForm">
        <form action="" className="form" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Title"
            {...register("title")}
            autoFocus
          />

          <input
            type="text"
            placeholder="URL del Proyect"
            {...register("urlProyect")}
          />

          <input
            type="text"
            placeholder="Link de la imagen"
            {...register("IMG")}
          />

          <textarea
            type="text"
            placeholder="Descripcion del proyecto"
            className="textarea"
            {...register("description")}
          />

          <button>Enviar al portfolio</button>
        </form>
      </div>
    </>
  );
}

export default ProjectFormPage;
