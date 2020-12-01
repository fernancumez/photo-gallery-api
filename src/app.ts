import express from "express";
import morgan from "morgan";
import photoRoutes from "./routes/photo";
import userRoutes from "./routes/user";
import config from "./config";
import path from "path";

// Initializations
const app = express();
const { PORT } = config;

// Settings
app.set("port", PORT);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/photos", photoRoutes);
app.use("/api/users", userRoutes);

// This folder for this application will be used to store public files
app.use("/uplads", express.static(path.resolve("uploads")));

export default app;
