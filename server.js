import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import emailRoute from "./routes/portfolioRoute.js";
// DOTENV CONFIG
dotenv.config();

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "./client/build")));
// ROUTE
app.use("/api/v1/portfolio", emailRoute);
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
// LISTEN

app.listen(8080, function () {
  console.log("Sever is running");
});
