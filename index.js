const express = require("express");
const app = express();
const addEmployee = require("./routes/task_1");
const getEmployee = require("./routes/task_2");
const getEmployeeById = require("./routes/task_3");
const updateInfo = require("./routes/task_4");
const blockStatus=require("./routes/task_5")
const deleteEmployee=require("./routes/task_6")

app.use(express.json());

app.use("/employee-info", addEmployee);
app.use("/employee-list", getEmployee);
app.use("/employee-by-id", getEmployeeById);
app.use("/employee-update", updateInfo);
app.use("/block-status-change",blockStatus)
app.use("/delete",deleteEmployee)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
