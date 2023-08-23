import axios from "./axios.js";

export const getProjectsRequest = async () => axios.get("/project");


export const getProjectRequest = async (id) => axios.get(`/project/${id}`);

export const createProjectRequest = async (project) => axios.post("/project", project);

export const updateProjectRequest = async (id, project) => axios.put(`/project/${id}`, project);

export const deleteProjectRequest = async (id) => axios.delete(`/project/${id}`);



 /* Rutas para el portfolio publico */
export const getPublicProjectsRequest = async () => axios.get("portfolio");