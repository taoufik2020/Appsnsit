// middlware de validation
exports.appsnsitesValidator = (req, res, next) => {
  req.check("name", "name will be requires").notEmpty();
  req.check("email").isEmail().withMessage("is email");
  req
    .check("description")
    .notEmpty()
    .isLength({ min: 10 })
    .withMessage("minleght 10 charactére");

  const errors = req.validationErrors();

  if (errors) {
    return res.status(400).send(errors);
  }
  next();
};
