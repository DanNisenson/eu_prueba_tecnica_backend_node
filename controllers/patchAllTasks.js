const Task = require("../models/task");
const HttpRes = require("../helpers/HttpRes");
const File = require("../helpers/File");

const patchAllTasks = (req, res) => {
  const updatedList = Task.updateAllTasks(req.body);
  if (updatedList === 500) {
    HttpRes.status500(res);
    return;
  }

  res.status(200).json(updatedList);
};

module.exports = patchAllTasks;
