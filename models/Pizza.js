const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PizzaSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required"
  },
  size: {
    type: Number,
    required: true
  },
  price: {
      type: String,
      trim: true,
      required: "Price is required"
  },
  ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ingredient"
    }
  ]


});

const Pizza = mongoose.model("Pizza", PizzaSchema);

module.exports = Pizza;