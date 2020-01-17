const express = require("express");
require("./db/mongoose");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

var cors = require("cors");

app.use(cors());
app.use(express.json());

app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
