import User from "../models/user.model.js";
/*traemos el modelo del Usuario y le ponemos los datos */
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET} from '../config.js'

// Rutas del login
export const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (userFound) return res.status(400).json(["The email already exists"]);

    const passwordHash = await bcrypt.hash(password, 10);
    // hash = string alateorio
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });
    /* al ponerle .save al newUser se carga en mongodb*/

    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });

    res.cookie("token", token);
    res.json({
      id: userSaved._id,
      username: userSaved.username,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(400).json({ message: "User dont found" });

    const isMarch = await bcrypt.compare(password, userFound.password);
    if (!isMarch) return res.status(400).json(["Incorrect Paswword"]);

    const token = await createAccessToken({ id: userFound._id });

    res.cookie("token", token);
    res.json({
      id: userFound._id,
      username: userFound.username,
    });
  } catch (error) {
    res.status(500).son({ message: error.message });
    console.log(error);
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

// Rutas del usuario
export const dashboard = async (req, res) => {
  const userFound = await User.findById(req.user.id);
  if (!userFound)
    return res.status(400).json({ message: "Usuario no encontrado" });

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
  });

  res.send("Dashboard");
};


export const verify = async (req,res)=>{
  const {token} = req.cookies;

  if(!token) return res.status(401).json({message:"Unauthorized"})
  
  jwt.verify(token, TOKEN_SECRET, async (err, user)=>{
    if(err) return res.status(401).json({message:"Unauthorized"})

    const userFound = await User.findById(user.id)
    if(!userFound) return res.status(401).json({message:"Unauthorized"})

    return res.json({
      id: userFound._id,
      email: userFound.email,
      username: userFound.username
    })

  })
}