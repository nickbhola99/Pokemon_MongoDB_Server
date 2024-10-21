import express from "express"
import mongoose from "mongoose";
import dotenv from 'dotenv'
import pokeRouter from './routes/pokemon.js'
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 3000;

mongoose.connect(process.env.MONGODB_URI)
app.use(cors());
app.use(express.json());
//base page
app.get('/', (req, res) => {
    res.send("welcome to PKMN!")
})
//pokeRouter middleware
app.use('/pokemon', pokeRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);    
})