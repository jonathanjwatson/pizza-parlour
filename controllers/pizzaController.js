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

router.get("/api/pizzas/:id", (req, res) => {
  db.Pizza.findById(req.params.id)
    .populate("ingredients")
    .then((foundPizza) => {
      res.json(foundPizza);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: `Failed to retrieve pizza with id: ${req.params.id}`,
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

router.put("/api/pizzas/:id", (req, res) => {
  db.Pizza.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedPizza) => {
      res.json(updatedPizza);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to update pizza.",
      });
    });
});

router.delete("/api/pizzas/:id", (req, res) => {
  db.Pizza.findByIdAndDelete(req.params.id)
    .then((deletedPizza) => {
      res.json(deletedPizza);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to delete pizza.",
      });
    });
});

module.exports = router;
