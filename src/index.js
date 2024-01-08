console.log("NODE_ENV:" + process.env.NODE_ENV);
import express from "express";
import "dotenv/config";
import cors from "cors";
import "./config/db.cofig.js";
import router from "./router/router.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", router);

app.listen(process.env.PORT || 8000, () =>
    console.log(`SERVER RUNNING ON ${process.env.PORT || 8000}`)
);

app.get("/", (req, res) => {
    res.send("Server Running fine!!");
});
