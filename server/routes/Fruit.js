const express = require("express");
const router = express.Router();

const { getFruit, postFruit } = require("../controller/Fruit");
const { upload } = require("../middleware/multer.middleware");
const { checkAuthentication } = require("../middleware/auth");

router.get("/api/fruit", getFruit);

router.post(
     "/api/fruit",
     checkAuthentication,
     upload.single("image"),
     postFruit
);

module.exports = router;
