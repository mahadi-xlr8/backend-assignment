module.exports = (req, res, next) => {
    
  const token = req.headers["x-access-token"];
  // here i'm considering 'xyz' as a valid access token.
  if (token !== "xyz") {
    return res.status(401).send("No valid access token provided!");
  }
  next();
};
