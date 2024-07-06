
const { getList } = require("../controller/student.controller");
const student = (app) => {
  app.get("/api/student", getList);
};
module.exports = {
  student,
};
