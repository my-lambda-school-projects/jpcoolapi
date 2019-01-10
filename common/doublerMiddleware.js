module.exports = (req, res, next) => {
  const value = req.query.number || 0;
  // use post:
  // const value = req.body.number || 0;

  if (value) {
    // http://localhost:5000/double?number=4
    req.double = value * 2;
    next();
  } else {
    // http://localhost:5000/double
    res.status(400).send('please provide a number');
  }
};
