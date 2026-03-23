import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";

import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(clerkMiddleware());

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Hello Aryan how are you",
  });
});

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/comments", commentRoutes);

// error handling middleware
app.use((err, req, res) => {
  console.error("Unhandled error:", err);
  return res.status(500).json({
    success: false,
    message: err.message || "Internal server error!!",
  });
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log(`Server Listening on http://localhost:${ENV.PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server", error.message);
    process.exit(1);
  }
};

startServer();
