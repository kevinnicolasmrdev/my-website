import axios from "./axios.js";

export const getProjectsRequest = () => axios.get("/project");

export const getProjectRequest = (id) => axios.get(`/project/${id}`);

export const createProjectRequest = (project) => axios.post("/project", project);

export const updateProjectRequest = (project) => axios.put(`/project/${project._id}`, project);

export const deleteProjectRequest = (id) => axios.delete(`/project/${id}`);
