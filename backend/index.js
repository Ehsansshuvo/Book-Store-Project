import express, { response } from "express";
const app=express();
const port=4000;
import mongoose from "mongoose";
import Books from './models/bookModel.js';
import bookRoutes from './routes/bookRoute.js';
import cors from 'cors';
import { mongooseURL } from "./config.js";
//middleware
app.use(express.json());
app.use(cors());
app.use('/allBook',bookRoutes);
//app.use(cors());
//app.use(cors());

// database connection
// auhhE2gZPhLyezuy
// sshuvoehsan96
mongoose.connect(mongooseURL)
.then(()=>{
    console.log("Okay,Connected");
    app.listen(port,()=>{
        console.log("The app is running on port number "+port);
    })
})
.catch((error)=>{
    console.log(error);
});

app.get('/',(req,res)=>{
     res.send("Welcome");
})