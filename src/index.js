import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 8000, () =>
    console.log(`SERVER RUNNING ON ${process.env.PORT || 8000}`)
);

app.get("/", (req, res) => {
    res.send("Server Running fine!!");
});
