const express = require("express");
const { signup, login, getUser } = require("../controller/User");
const router = express.Router();

router.get("/api/user/:id", getUser);
router.post("/api/signup", signup);
router.post("/api/login", login);

module.exports = router;
