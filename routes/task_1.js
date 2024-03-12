const app = require("express").Router();
const Employee = require("../db");
const dataValidation = require("../middleware/employeeInfoValidation");
const tokenChecker = require("../middleware/tokenChecker");

app.post("/", tokenChecker, dataValidation, async (req, res) => {
  try {
    const employee = new Employee({
      fullName: req.body.fullName,
      email: req.body.email,
      phone: req.body.phone,
    });
    await employee.save();
    res.status(201).send("Employee info added successfully!");
  } catch (err) {
    console.log(err.message);
    res.status(400).send("Email already exist!");
  }
});

module.exports = app;
