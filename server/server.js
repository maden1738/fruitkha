const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
     res.send({ hello: 1 });
});

app.listen(8000, () => {
     console.log("server started");
});
