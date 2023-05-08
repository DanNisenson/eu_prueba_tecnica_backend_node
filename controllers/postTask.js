const fs = require("fs");
const uuid = require("uuid");

const postTask = (req, res) => {
  const toDoList = JSON.parse(fs.readFileSync("db.json", "utf8"));
  const task = {
    id: toDoList.length + 1,
    uuid: uuid.v4(),
    ...req.body,
  };

  toDoList.push(task);

  try {
    fs.writeFileSync("db.json", JSON.stringify(toDoList));
  } catch (error) {
    const errMsg =
      "There's been an error processing your request. Try again later.";
    res.status(500).json(errMsg);
  }

  res.status(201).json(task);
};

module.exports = postTask;
