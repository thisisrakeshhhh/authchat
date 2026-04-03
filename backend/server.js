import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

const __dirname = path.resolve();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// Serving frontend from dist
app.use(express.static(path.join(__dirname, "frontend", "dist")));

app.use((req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"), (err) => {
		if (err) {
			console.error("Error sending index.html: ", err);
			res.status(500).send("Error loading frontend");
		}
	});
});


server.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});