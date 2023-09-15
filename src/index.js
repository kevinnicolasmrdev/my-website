import app from './app.js';
import { connectDB } from './db.js';

const PORT = process.env.PORT || 8080;

connectDB()

app.get('/',(req,res)=>{
  res.send('Hello')
})

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});