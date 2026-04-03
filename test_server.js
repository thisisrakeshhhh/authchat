import express from "express";
const app = express();

app.use((req, res) => {
    res.send("Hello world from app.use catch-all");
});





app.listen(3001, () => {
    console.log("Test server running on 3001");
});
