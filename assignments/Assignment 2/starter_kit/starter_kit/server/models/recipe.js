const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    name: {
      type: String,
    },
    description: {
      type: String
    },
    difficulty: {
      type: String,
    },
    ingredients: [
      {
        type: String,
      },
    ],
    steps:[
      {
        type: String,
      },
    ] 
  });
  

  const Recipe = mongoose.model("Recipe", recipeSchema);
  module.exports = Recipe;
  