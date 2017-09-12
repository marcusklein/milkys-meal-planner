var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
  name: String,
  foods: [{
    foodId: String
  }]
});

module.exports = mongoose.model('Recipe', RecipeSchema);
