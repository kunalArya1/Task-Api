import express from "express";
import {
  homePage,
  CreateTask,
  UpdateTask,
  DeleteTask,
} from "../controllers/TaskController.js";
const router = express.Router();

router.route("/").get(homePage);
router.route("/").post(CreateTask);
router.route("/update/:_id").patch(UpdateTask);
router.route("/delete/:_id").delete(DeleteTask);

export default router;
