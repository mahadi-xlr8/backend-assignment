const app = require("express").Router();
const Employee = require("../db");

app.put("/", async (req, res) => {
  try {
    const id=req.query.id;
    console.log(id)
    const employee = await Employee.findById(id);
    employee.block = !employee.block;
    await employee.save();
    res.status(200).send("Block status changed successfully!");
  } catch (err) {
    console.log(err.message);
    res.status(400).send("Something went wrong");
  }
});

module.exports = app;
