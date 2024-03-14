import { ApiRespone } from "../utils/ApiResponse.js";
import { AsynHandler } from "../utils/AsyncHandler.js";

import Task from "../models/Task.model.js";
export const homePage = AsynHandler(async (req, res) => {
  const data = await Task.find({});
  res.status(200).json(new ApiRespone(200, data, "Data Fetched Succes"));
});

export const CreateTask = AsynHandler(async (req, res) => {
  const data = await Task.create({
    name: req.body.name,
    isCompleted: req.body.isCompleted,
    desc: req.body.desc,
  });
  res.status(200).json(new ApiRespone(200, data, "Data Fetch Sucess"));
});
