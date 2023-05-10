const express = require("express");

const router = express.Router();

router.get("/all", require("../controllers/getTasks"));

router.patch("/all", require("../controllers/patchAllTasks"));

router.post("/", require("../controllers/postTask"));

router.patch("/", require("../controllers/patchTask"));

router.delete("/:uuid", require("../controllers/deleteTask"));

module.exports = router;
