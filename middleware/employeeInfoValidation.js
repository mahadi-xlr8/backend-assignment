const isNameValid=require("../helper/nameValidation")
const isPhoneValid=require("../helper/phoneValidation")
module.exports = (req, res, next) => {
  const { firstName, lastName, email, phone } = req.body;

  //concatenating first and last name to make user's full name
  let fullName = firstName;
  if (lastName) fullName += ` ${lastName}`;

  if (fullName == undefined || email == undefined || phone == undefined)
    return res.status(400).send("All informations not privided!");

  
  if (!isNameValid(fullName)) {
    return res.status(400).send("Invalid first name!");
  }

  // checking if it is a valid email address or not
  if (!email.match(/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)(\.[a-z]+)+$/g)) {
    return res.status(400).send("Invalid email address!");
  }


  if (!isPhoneValid(phone)) {
    return res.status(400).send("Invalid phone number!");
  }
  req.body.fullName = fullName;
  next();
};
