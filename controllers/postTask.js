const fs = require("fs");
const uuid = require("uuid");

const postTask = (req, res) => {
  let { toDoList } = req;
  if (!toDoList) return;

  const task = {
    id: toDoList.length + 1,
    uuid: uuid.v4(),
    ...req.body,
  };
  toDoList = [...toDoList, task];

  try {
    fs.writeFileSync("db.json", JSON.stringify(toDoList));
    res.status(201).json(task);
  } catch (error) {
    const errMsg =
      "There's been an error processing your request. Try again later.";
    res.status(500).json(errMsg);
  }
};

module.exports = postTask;
