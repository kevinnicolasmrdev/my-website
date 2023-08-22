import mongoose from 'mongoose';
import { string } from 'zod';

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    urlProyect:{
        type: String,
        required: true,
    } ,
    IMG:{
        type: String,
        required: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        require: true
    }
    
},{
    timestamps: true,
})

export default mongoose.model('Project', projectSchema)