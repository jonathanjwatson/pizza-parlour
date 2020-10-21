const { Router } = require("express");
const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/api/ingredients", (req, res) => {
  db.Ingredient.find({})
    .then((foundIngredients) => {
      res.json(foundIngredients);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to retrieve ingredients.",
      });
    });
});

router.get("/api/ingredients/:id", (req, res) => {
  db.Ingredient.findById(req.params.id)
    .then((foundIngredient) => {
      res.json(foundIngredient);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: `Failed to retrieve ingredient with id: ${req.params.id}`,
      });
    });
});

router.post("/api/ingredients", (req, res) => {
  db.Ingredient.create(req.body)
    .then((newIngredient) => {
      res.json(newIngredient);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to create new ingredient.",
      });
    });
});

router.put("/api/ingredients/:id", (req, res) => {
  db.Ingredient.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedIngredient) => {
      res.json(updatedIngredient);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to update ingredient.",
      });
    });
});

router.delete("/api/ingredients/:id", (req, res) => {
  db.Ingredient.findByIdAndDelete(req.params.id)
    .then((deletedItem) => {
      res.json(deletedItem);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to delete ingredient.",
      });
    });
});

module.exports = router;
