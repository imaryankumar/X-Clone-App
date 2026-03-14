import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Hello Aryan how are you",
  });
});

app.listen(ENV.PORT, () => {
  connectDB();
  console.log(`Server Listening on http://localhost:${ENV.PORT}`);
});
