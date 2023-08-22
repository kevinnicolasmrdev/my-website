import { useEffect } from "react";
import { useProject } from "../contexto/ProjectContext.jsx";
import "./pagesStyle/projectFormPage.css";
import { useForm } from "react-hook-form";
import {useNavigate, useParams} from 'react-router-dom'

function ProjectFormPage() {
  const { register, handleSubmit } = useForm();
  const {createProject, getProject, updateProject} = useProject();
  const navigate = useNavigate()
  const params = useParams();

  useEffect(()=>{
    async function loadProject(){
     if(params.id){
       await getProject(params.id)
     }
    }
   loadProject()
   },[])




  const onSubmit = handleSubmit((data)=>{
   if(params.id){
    updateProject(params.id, data)
   }else{
    createProject(data)
     }
    
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
