const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/api/pizzas", (req, res) => {
  db.Pizza.find({})
    .populate("ingredients")
    .then((foundPizzas) => {
      res.json(foundPizzas);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to retrieve pizzas.",
      });
    });
});

router.post("/api/pizzas", (req, res) => {
  db.Pizza.create(req.body)
    .then((newPizza) => {
      res.json(newPizza);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to create new pizza.",
      });
    });
});

module.exports = router;
