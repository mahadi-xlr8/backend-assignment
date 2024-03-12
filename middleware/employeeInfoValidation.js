module.exports = (req, res, next) => {
  const { firstName, lastName, email, phone } = req.body;

  //concatenating first and last name to make user's full name
  let fullName = firstName;
  if (lastName) fullName += ` ${lastName}`;

  if (fullName == undefined || email == undefined || phone == undefined)
    return res.status(400).send("All informations not privided!");

  // checking if it is a valid name
  // name should have a minimum of 2 characters and a maximum of 100 characters.
  if (fullName.length <= 1 || fullName.length > 100) {
    return res.status(400).send("Invalid first name!");
  }

  // checking if it is a valid email address or not
  if (!email.match(/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)(\.[a-z]+)+$/g)) {
    return res.status(400).send("Invalid email address!");
  }

  // checking if it is a valid phone number accourding to our country

  if (!phone.match(/^(\+88)?01([0-9]{9})$/g)) {
    return res.status(400).send("Invalid phone number!");
  }
  req.body.fullName = fullName;
  next();
};
