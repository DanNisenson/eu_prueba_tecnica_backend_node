const fs = require("fs");
const File = require("../helpers/File");
const HttpRes = require("../helpers/HttpRes");
const Task = require("../models/task");

const deleteTask = (req, res) => {
  const toDoList = File.open();
  if (!toDoList) {
    HttpRes.status500(res);
    return;
  }

  const { uuid } = req.params;
  const result = Task.deleteTask(uuid, toDoList);

  if (result === 404) {
    res.status(404).json({ message: "Task not found" });
    return;
  }
  if (result === 500) {
    HttpRes.status500(res);
    return;
  }

  res.status(200).json(toDoList);
};

module.exports = deleteTask;
