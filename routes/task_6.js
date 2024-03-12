const app = require("express").Router();
const Employee = require("../db");
const tokenChecker = require("../middleware/tokenChecker");

app.delete("/", tokenChecker, async (req, res) => {
  try {
    const { id } = req.query;
    const result = await Employee.findByIdAndDelete(id);
    let message = "Employee deleted successfully!",
      status = 200;
    if (result == null) (message = "User id does not exist!"), (status = 400);
    res.status(status).send(message);
  } catch (err) {
    console.log(err.message);
    res.status(400).send("Something went wrong!");
  }
});

module.exports = app;
