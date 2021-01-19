const express = require("express");
const appsnsitesRoute = express.Router();
const Appsnsites = require("../Model/appsnsites");

const {
  add,
  remove,
  getAll,
  update,
} = require("../Controller/appsnsitesController");
const { appsnsitesValidator } = require("../middlware/Validator");
appsnsitesRoute.post("/add", [appsnsitesValidator], add);

appsnsitesRoute.delete("/delete/:id", remove);
appsnsitesRoute.get("/", getAll);
appsnsitesRoute.put("/update/:id", update);

module.exports = appsnsitesRoute;
