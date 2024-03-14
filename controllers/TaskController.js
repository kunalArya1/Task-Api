import { ApiRespone } from "../utils/ApiResponse.js";
import { AsynHandler } from "../utils/AsyncHandler.js";
import Task from "../models/Task.model.js";

export const CreateTask = AsynHandler(async (req, res) => {
  const data = await Task.create({
    name: req.body.name,
    isCompleted: req.body.isCompleted,
    desc: req.body.desc,
  });
  res.status(200).json(new ApiRespone(200, data, "Data Fetch Sucess"));
});

export const homePage = AsynHandler(async (req, res) => {
  const data = await Task.find({});
  res.status(200).json(new ApiRespone(200, data, "Data Fetched Succes"));
});

export const UpdateTask = AsynHandler(async (req, res) => {
  const updateTask = await Task.findByIdAndUpdate(
    req.params._id,
    {
      name: req.body.name,
      desc: req.body.desc,
    },
    {
      new: true,
    }
  );

  res
    .status(200)
    .json(new ApiRespone(200, updateTask, "Data Updated Successfuly"));
});

export const DeleteTask = AsynHandler(async (req, res) => {
  await Task.findByIdAndDelete(req.params._id);

  res.status(200).json(new ApiRespone(200, {}, "Task Deleted Sussecfully"));
});
