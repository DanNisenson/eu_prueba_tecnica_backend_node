const uuid = require("uuid");
const File = require("../helpers/File");

class Task {
  static insertTask(task, toDoList) {
    const ids = toDoList.map((task) => task.id);
    const lastId = toDoList.length > 0 ? Math.max(...ids) : 0;
    task = {
      ...task,
      id: lastId + 1,
      uuid: uuid.v4(),
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

  static updateAllTasks(body) {
    const result = File.write(body);
    if (!result) return 500;

    return body;
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
