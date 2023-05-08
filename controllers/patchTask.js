const fs = require("fs");
const Task = require("../models/task");
const HttpRes = require("../helpers/HttpRes");
const File = require("../helpers/File");

const patchTask = (req, res) => {
  const toDoList = File.open();
  if (!toDoList) {
    HttpRes.status500(res);
    return;
  }

  const updatedTask = Task.updateTask(req.body, toDoList);
  if (updatedTask === 404) {
    return res.status(404).json({ message: "Task not found" });
  }
  if (updatedTask === 500) {
    HttpRes.status500(res);
    return;
  }

  res.status(200).json(updatedTask);
};

module.exports = patchTask;
