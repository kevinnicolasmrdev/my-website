/*En app.js vamos a hacer las configuraciones del servidor con express.js*/
import express from 'express';
const app = express();
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js'
import projectRoutes from './routes/project.routes.js'
import cors from 'cors'




//Midelwares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", projectRoutes);

export default app;