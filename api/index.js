import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import progressRoute from "./routes/course.route.js";
import { errorHandler } from "./middleware/error.js";



const app = express();
dotenv.config();
app.use(express.json());
const port = process.env.PORT || 8001;
const connect = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
    ],
    credentials: true,
  })
);

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});


app.use((req,res,next)=>{
  console.log(`Request received: ${req.method} ${req.url}`);
  next(); 
});



app.use("/api/progress",progressRoute);
app.use(errorHandler);


app.listen(port, () => {
    connect();
    console.log(`Connected to backend is ${port}.`);
});