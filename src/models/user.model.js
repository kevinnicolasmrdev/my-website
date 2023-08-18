import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    }
},{
    timestamps: true,
    /* Este objeto despues de los datos del usuario hace que se genere una fecha automatica de creacion y actualizacion */
})


export default mongoose.model('User', userSchema)