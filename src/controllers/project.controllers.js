import projectModel from '../models/project.model.js'


export const getProjects  = async(req, res)=>{
    const projects = await projectModel.find({
        user: req.user.id
    }).populate('user')
    res.json(projects)
}

export const getProject  = async(req, res)=>{
    const foundProject  = await projectModel.findById(req.params.title);
    if(!foundProject) return res.status(404).json({message: 'Project dont found'})

    res.json(foundProject)
}

export const createProject = async(req, res)=>{
    const {title,description,urlProyect,IMG} = req.body;
    const newProject = new projectModel({
        title,
        description,
        urlProyect,
        IMG,
        user: req.user.id
    })
    const saveProject = await newProject.save()
    res.json(saveProject)
}

export const deleteProject = async(req, res)=>{
    const foundProject  = await projectModel.findByIdAndDelete(req.params.id);
    if(!foundProject) return res.status(404).json({message: 'Tha project who your wont to delete, dont exsist'})
    res.json("Tu tarea a sido eliminada correctamente")
}

export const upgradeProject = async(req, res)=>{
    const foundProject  = await projectModel.findByIdAndUpdate(req.params.id, req.body);
    if(!foundProject) return res.status(404).json({message: 'Tha project who your wont to update, dont exsist'}) 
    res.json(foundProject)
}


