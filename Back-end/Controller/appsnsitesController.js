const Appsnsites = require("../Model/appsnsites");

exports.add = (req, res) => {
  const appsnsites = new Appsnsites(req.body);
  appsnsites
    .save()
    .then((appsnsites) => {
      res.json({
        Appsnsites: appsnsites,
      });
    })
    .catch((error) => {
      res.json({
        error: error,
      });
    });
};

exports.remove = (req, res) => {
  console.log("debut");
  Appsnsites.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      return res.status(500).send(err);
    } else return res.send("Successfuly deleted ");
  });
};

exports.getAll = (req, res) => {
  Appsnsites.find({}, (error, resultat) => {
    if (error) {
      return res.status(500).sens(error);
    }
    return res.status(200).send(resultat);
  });
};
exports.update = (req, resp) => {
  Appsnsites.findByIdAndUpdate(req.params.id, req.body, (err, resulatat) => {
    if (err) {
      return resp.status(500).send(err);
    }

    return resp.send("Successfuly update ");
  });
};
