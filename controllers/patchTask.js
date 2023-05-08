const fs = require("fs");

const patchTask = (req, res) => {
  let { toDoList } = req;
  if (!toDoList) return;

  const { uuid } = req.body;
  const updatedFields = req.body;

  let task = toDoList.find((task) => task.uuid === uuid);
  if (!task) {
    res.status(404).json({ message: "Task not found" });
    return;
  }

  task = { ...task, ...updatedFields };
  toDoList = toDoList.map((t) => (t.uuid === uuid ? task : t));

  try {
    fs.writeFileSync("db.json", JSON.stringify(toDoList));
    res.status(200).json(task);
  } catch (error) {
    const errMsg =
      "There's been an error processing your request. Try again later.";
    res.status(500).json(errMsg);
  }
};

module.exports = patchTask;
