const getTasks = (req, res) => {
  const { toDoList } = req;
  if (!toDoList) return;

  res.status(200).json(toDoList);
};

module.exports = getTasks;
