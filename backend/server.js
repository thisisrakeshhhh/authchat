import dotenv from "dotenv";
import express from "express";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js";
import cookie from "cookie-parser";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";


const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);


app.listen(process.env.PORT || 3000, () => {
    connectToMongoDB();
    console.log("Server is running on port 3000");
});

