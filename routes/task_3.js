const app = require("express").Router();

const Employee = require("../db");

app.get("/", async (req, res) => {
  try {
    const id = req.query.id;

    const employee = await Employee.findById(id).select("-block");
    // checking if given id doesn't exist
    if (employee != null) res.status(200).send(employee);
    else res.status(400).send("User id does not exist!");
  } catch (err) {
    console.log(err.message);
    res.status(400).send("Something went wrong!");
  }
});

module.exports = app;
