const fs = require("fs");

class File {
  static filePath = "db.json";
  static config = "utf8";

  static open() {
    try {
      let rawList = fs.readFileSync(this.filePath, this.config);
      return JSON.parse(rawList);
    } catch (err) {
      console.error(err);
      return;
    }
  }

  static write(toDoList) {
    try {
      fs.writeFileSync("db.json", JSON.stringify(toDoList));
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}

module.exports = File;
