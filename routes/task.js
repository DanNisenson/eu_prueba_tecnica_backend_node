const express = require("express");

const router = express.Router();

router.get("/", require("../controllers/getTasks"));

router.post("/", require("../controllers/postTask"));

// router.patch("/:uuid", require("../controllers/patchTask"));

// router.delete("/:uuid", require("../controllers/deleteTask"));

module.exports = router;
