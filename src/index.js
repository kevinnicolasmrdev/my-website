import app from './app.js';
import { connectDB } from './db.js';

const PORT = process.env.PORT || 4000; // Utiliza un puerto proporcionado por el entorno o elige uno predeterminado

connectDB();

app.get('/',(req,res)=>{
  res.send('Hello')
})

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});