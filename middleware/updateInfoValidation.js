const isNameValid = require("../helper/nameValidation");
const isPhoneValid = require("../helper/phoneValidation");
module.exports = (req, res, next) => {
  const { fullName, phone } = req.body;
  if (fullName && !isNameValid(fullName))
    return res.status(400).send("Invalid fullname!");
  if (phone && !isPhoneValid(phone))
    return res.status(400).send("Invalid phone number!");
  next();
};
