module.exports = (fullName) => {
  // checking if it is a valid name
  // name should have a minimum of 2 characters and a maximum of 100 characters.
  if (fullName.length <= 1 || fullName.length > 100) return false;
  return true;
};
