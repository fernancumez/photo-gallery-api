import express from "express";
import morgan from "morgan";
import path from "path";
import cors from "cors";
import passport from "passport";
import passportMiddleware from "./middlewares/passport";
import photoRoutes from "./routes/photo";
import userRoutes from "./routes/user";
import authRoutes from "./routes/auth";
import config from "./config";

// Initializations
const app = express();
const { PORT } = config;

// Settings
app.set("port", PORT);

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
passport.use(passportMiddleware);

// Routes
app.use("/api/", authRoutes);
app.use("/api/photos", photoRoutes);
app.use("/api/users", userRoutes);

// This folder for this application will be used to store public files
app.use("/uplads", express.static(path.resolve("uploads")));

export default app;
