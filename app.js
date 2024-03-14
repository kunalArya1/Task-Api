import express from "express";
const app = express();
import dotenv from "dotenv";
import connectDb from "./db/connect.db.js";
import router from "./routes/TaksRouter.js";

dotenv.config();
app.use(express.json());
app.use("/api/v1/task", router);

app.route("/").get((req, res) => {
  res.send("<h1>Server is Up and Running</h1>");
});



const start = async () => {
  try {
    connectDb(process.env.MONGO_URL);
    app.listen(process.env.PORT, () => {
      console.log("Server is up and running on port 3000");
    });
  } catch (error) {
    console.log("Error while Connceting to database", error);
  }
};

start();
