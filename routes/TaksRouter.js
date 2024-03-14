import express from "express";
import { homePage, CreateTask } from "../controllers/TaskController.js";
const router = express.Router();

router.route("/").get(homePage);
router.route("/").post(CreateTask);

export default router;
