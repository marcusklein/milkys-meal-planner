var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlanSchema = new Schema({
  name: String,
  meals: [{
    mealId: String
  }]
});

module.exports = mongoose.model('Plan', PlanSchema);
