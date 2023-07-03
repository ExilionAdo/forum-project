//Posts
const express = require("express");
const router = express.Router();

router.post("/");

router.route("/:id").get().put().delete();

module.exports = router;
