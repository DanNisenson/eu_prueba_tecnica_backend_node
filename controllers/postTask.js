const File = require("../helpers/File");
const HttpRes = require("../helpers/HttpRes");
const Task = require("../models/task");

const postTask = (req, res) => {
  const task = req.body;

  const toDoList = File.open();
  if (!toDoList) {
    HttpRes.status500(res);
    return;
  }

  const newTask = Task.insertTask(task, toDoList);
  if (!newTask) {
    HttpRes.status500(res);
    return;
  }

  res.status(201).json(newTask);
};

module.exports = postTask;
