const fs = require("fs");

const deleteTask = (req, res) => {
  const { toDoList } = req;
  if (!toDoList) return;

  const { uuid } = req.params;

  const taskIndex = toDoList.findIndex((task) => task.uuid === uuid);
  if (taskIndex === -1) {
    res.status(404).json({ message: "Task not found" });
    return;
  }

  toDoList.splice(taskIndex, 1);

  try {
    fs.writeFileSync("db.json", JSON.stringify(toDoList));
    res.status(200).json(toDoList);
  } catch (error) {
    const errMsg =
      "There's been an error processing your request. Try again later.";
    res.status(500).json(errMsg);
  }
};

module.exports = deleteTask;
