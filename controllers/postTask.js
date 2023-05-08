const fs = require("fs");
const uuid = require("uuid");

const postTask = (req, res) => {
  let toDoList = JSON.parse(fs.readFileSync("db.json", "utf8"));
  const task = {
    id: toDoList.length + 1,
    uuid: uuid.v4(),
    ...req.body,
  };

  toDoList = [...toDoList, task];

  try {
    fs.writeFileSync("db.json", JSON.stringify(toDoList));
  } catch (error) {
    const errMsg =
      "There's been an error processing your request. Try again later.";
    return res.status(500).json(errMsg);
  }

  return res.status(201).json(task);
};

module.exports = postTask;
