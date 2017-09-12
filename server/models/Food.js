var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FoodSchema = new Schema({
  name: String,
  macros: {
    protein: Number,
    carbs: Number,
    fats: Number
  },
  quantity: String
});

module.exports = mongoose.model('Food', FoodSchema);
