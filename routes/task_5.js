const app = require("express").Router();
const Employee = require("../db");
const tokenChecker = require("../middleware/tokenChecker");

app.put("/", tokenChecker, async (req, res) => {
  try {
    const id = req.query.id;
    const employee = await Employee.findById(id);
    let message = "Block status changed successfully!",
      status = 200;
    if (employee != null) {
      employee.block = !employee.block;
      await employee.save();
    } else (message = "user id does not exist!"), (status = 400);
    res.status(status).send(message);
  } catch (err) {
    console.log(err.message);
    res.status(400).send("Something went wrong");
  }
});

module.exports = app;
