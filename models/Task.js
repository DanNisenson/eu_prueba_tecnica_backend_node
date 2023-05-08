const uuid = require("uuid");
const File = require("../helpers/File");

class Task {
  static insertTask(task, toDoList) {
    task = {
      id: toDoList.length + 1,
      uuid: uuid.v4(),
      ...task,
    };
    toDoList = [...toDoList, task];

    const result = File.write(toDoList);
    if (!result) return;

    return task;
  }
}

module.exports = Task;
