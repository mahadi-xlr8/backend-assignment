const app = require("express").Router();
const Employee = require("../db");
const tokenChecker = require("../middleware/tokenChecker");

app.get("/", async (req, res) => {
  try {
    const employees = await Employee.find().select('_id fullName block');
    res.status(200).json(employees);
  } catch (err) {
    console.log(err);
    res.status(400).send("something went wrong!");
  }
});

module.exports = app;
