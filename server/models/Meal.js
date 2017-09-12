var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MealSchema = new Schema({
  name: String,
  recipes: [{
    recipeId: String
  }],
  time: String,
  order: Number
});

module.exports = mongoose.model('Meal', MealSchema);
