import express from "express";
import { homePage } from "../controllers/TaskController.js";
const router = express.Router();

router.route("/").get(homePage);

export default router;
