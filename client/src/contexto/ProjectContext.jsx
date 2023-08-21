import { createContext, useContext, useState } from "react";
import {
    createProjectRequest,
    deleteProjectRequest,
    getProjectsRequest,
} from "../api/project";

const ProjectContext = createContext();

export const useProject = () => {
    const context = useContext(ProjectContext);

    if (!context) {
        throw new Error("useProjects must be used within a ProjectProvider");
    }
    return context;
};

export function ProjectProvider({ children }) {
    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        try {
            const res = await getProjectsRequest();
            setProjects(res.data);
        } catch (error) {
            console.log("Hubo un error al momento de pedir los proyectos");
        }
    };

    const createProject = async (project) => {
        const res = await createProjectRequest(project);
    };




    const deleteProject = async (id) => {
        try {
            const res = await deleteProjectRequest(id);
            if (res.status === 204){
                const newProjects = projects.filter(project => project._id !== id);
                setProjects(newProjects)
            }


        } catch (err) {
            console.log(err);
        }
    };

    return (
        <ProjectContext.Provider
            value={{
                projects,
                createProject,
                getProjects,
                deleteProject,
            }}
        >
            {children}
        </ProjectContext.Provider>
    );
}
