const express = require("express");
const app = express();
const addEmployee = require("./routes/task_1");
const getEmployee = require("./routes/task_2");
const getEmployeeById = require("./routes/task_3");
const updateInfo = require("./routes/task_4");

app.use(express.json());

app.use("/employee-info", addEmployee);
app.use("/employee-list", getEmployee);
app.use("/employee-by-id", getEmployeeById);
app.use("/employee-update", updateInfo);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
