const express = require("express");
const { getNews, postNews } = require("../controller/News");
const { upload } = require("../middleware/multer.middleware");
const { checkAuthentication } = require("../middleware/auth");
const router = express.Router();

router.get("/api/news", getNews);

router.post("/api/news", checkAuthentication, upload.single("image"), postNews);

module.exports = router;
