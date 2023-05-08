const express = require("express");
const openFile = require("../middlewares/openFile");

const router = express.Router();

router.use("/task", openFile, require("./task"));

module.exports = router;
