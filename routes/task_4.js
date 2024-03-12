const app = require("express").Router();
const Employee = require("../db");
const updateInfoValidation = require("../middleware/updateInfoValidation");
const tokenChecker = require("../middleware/tokenChecker");
app.put("/", tokenChecker, updateInfoValidation, async (req, res) => {
  try {
    const id = req.query.id;

    // creating the updated data object
    const data = {
      fullName: req.body.fullName,
      phone: req.body.phone,
    };
    if (!req.body.fullName) delete data.fullName;
    if (!req.body.phone) delete data.phone;

    // if there is no data provided to update returning from here
    if (Object.keys(data).length == 0) {
      return res.status(200).send("Nothing to update!");
    }

    await Employee.findByIdAndUpdate(id, data);
    res.status(200).send("Info updated successfully!");
  } catch (err) {
    console.log(err.message);
    res.status(400).send("Something went wrong!");
  }
});

module.exports = app;
