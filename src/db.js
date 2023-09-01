const uri = "mongodb+srv://kevinnicolasmr:5qG9YwHQFfSfPXAr@cluster0.elrjfaj.mongodb.net/kevinMedinaWeb";




import mongoose from 'mongoose';

export const connectDB =()=>{
    try{
        mongoose.connect(uri);
        console.log('DB is connected')
    }catch(error){
        console.log(error)
    }
}