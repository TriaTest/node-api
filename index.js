const express = require("express");
const cors = require("cors");

const { student } = require("./src/route/student.route");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.send("Hello Express in Node.js. My name is SOK");
});

// call route

student(app);


const port = 8085;
app.listen(port, () => {
  console.log("http://localhost:" + port);
});
