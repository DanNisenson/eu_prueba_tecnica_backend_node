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

  static updateTask(body, toDoList) {
    let tIndex = toDoList.findIndex((task) => task.uuid === body.uuid);
    if (tIndex === -1) {
      return 404;
    }

    const newTask = { ...toDoList[tIndex], ...body };
    toDoList[tIndex] = newTask;

    const result = File.write(toDoList);
    if (!result) return 500;

    return newTask;
  }

  static deleteTask(uuid, toDoList) {
    let tIndex = toDoList.findIndex((task) => task.uuid === uuid);
    if (tIndex === -1) {
      return 404;
    }

    toDoList.splice(tIndex, 1);

    const result = File.write(toDoList);
    if (!result) return 500;

    return toDoList;
  }
}

module.exports = Task;
