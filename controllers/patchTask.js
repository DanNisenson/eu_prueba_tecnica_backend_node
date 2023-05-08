const fs = require("fs");

const patchTask = (req, res) => {
  let toDoList = JSON.parse(fs.readFileSync("db.json", "utf8"));
  const { uuid } = req.body;
  const updatedFields = req.body;

  let task = toDoList.find((task) => task.uuid === uuid);
  if (!task) return res.status(404).json({ message: "Task not found" });

  task = { ...task, ...updatedFields };
  toDoList = toDoList.map((t) => (t.uuid === uuid ? task : t));

  try {
    fs.writeFileSync("db.json", JSON.stringify(toDoList));
  } catch (error) {
    const errMsg =
      "There's been an error processing your request. Try again later.";
    return res.status(500).json(errMsg);
  }

  return res.status(200).json(task);
};

module.exports = patchTask;
