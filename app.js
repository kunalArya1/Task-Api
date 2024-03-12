import express from "express";
const app = express();
import dotenv from "dotenv";
import router from "./routes/TaksRouter.js";

dotenv.config();
app.use(express.json());
app.use("/api/v1/task", router);

app.route("/").get((req, res) => {
  res.send("<h1>Server is Up and Running</h1>");
});

app.listen(process.env.PORT, () => {
  console.log("Server is up and running on port 3000");
});
