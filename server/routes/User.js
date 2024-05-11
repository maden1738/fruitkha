const express = require("express");
const { signup, login, getUser } = require("../controller/User");
const router = express.Router();
const { checkAuthentication } = require("../middleware/auth");

router.get("/api/user", checkAuthentication, getUser);
router.post("/api/signup", signup);
router.post("/api/login", login);

module.exports = router;
