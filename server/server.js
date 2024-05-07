require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config({ path: "./.env" });

const handleServerError = require("./middleware/handleServerError");
const fruitRoutes = require("./routes/Fruit");
const userRoutes = require("./routes/User");
const newsRoutes = require("./routes/News");

const app = express();

mongoose.connect(process.env.MONGODB_URI).then(() => {
     console.log("mongodb connected");
});

app.use(cors());
app.use(express.json());
app.use(express.static("uploads"));

app.use(fruitRoutes);
app.use(userRoutes);
app.use(newsRoutes);

app.use(handleServerError);

app.listen(8000, () => {
     console.log("server started");
});
