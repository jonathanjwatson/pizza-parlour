const express = require("express");
const router = express.Router();

const db = require("../models")

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

module.exports = router;