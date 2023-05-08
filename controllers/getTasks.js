const File = require("../helpers/File");
const HttpRes = require("../helpers/HttpRes");

const getTasks = (req, res) => {
  const toDoList = File.open();
  if (!toDoList) {
    HttpRes.status500(res);
    return;
  }

  res.status(200).json(toDoList);
};

module.exports = getTasks;
