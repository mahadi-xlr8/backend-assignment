const app = require("express").Router();
const tokenChecker = require("../middleware/tokenChecker");
const Employee = require("../db");

app.get("/", tokenChecker, async (req, res) => {
  try {
    const id = req.query.id;

    const employee = await Employee.findById(id).select("-block");
    res.status(200).send(employee);
  } catch (err) {
    console.log(err.message);
    res.status(400).send("Something went wrong!");
  }
});

module.exports = app;
