const File = require("../helpers/File");

const getTasks = (req, res) => {
  const toDoList = File.open();
  if (!toDoList)
    res.status(500).json({ error: "Something went wrong. Contact support." });

  res.status(200).json(toDoList);
};

module.exports = getTasks;
