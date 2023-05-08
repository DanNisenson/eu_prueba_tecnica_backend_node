const fs = require("fs");

const getTasks = (req, res) => {
  const toDoList = JSON.parse(fs.readFileSync("db.json", "utf8"));

  res.status(200).json(toDoList);
};

module.exports = getTasks;
