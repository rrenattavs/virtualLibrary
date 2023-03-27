//connections with the server and the database
import express from "express";
import { router } from "./routes/bookrouter.js";

import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
app.use(express.json());

const port = 5040;

dotenv.config();
console.log(process.env.MONGO_URL);
const connectionString = process.env.MONGO_URL;

app.use("/books", router);

//Server is connected
app.get("/", (req, res, next) => {
  res.send("The server started!");
});

const db = await mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to Database"))
  .then(() => {
    app.listen(port);
  })
  .catch((err) => console.log(err));

