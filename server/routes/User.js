const express = require("express");
const { signup, login } = require("../controller/User");
const router = express.Router();

router.post("/api/signup", signup);
router.post("/api/login", login);

module.exports = router;
