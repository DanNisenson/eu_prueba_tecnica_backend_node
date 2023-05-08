const fs = require("fs");

const openFile = (req, res, next) => {
  fs.readFile("db.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Something went wrong. Contact support.");
    }

    req.toDoList = JSON.parse(data);
    next();
  });
};

module.exports = openFile;
