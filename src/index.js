import express from "express";
import "dotenv/config";

const app = express();

app.use(express.json());

app.listen(process.env.PORT || 8000, () =>
    console.log(`SERVER RUNNING ON ${process.env.PORT || 8000}`)
);

app.get("/", (req, res) => {
    res.send("Server Running fine!!");
});
