let router = require('express').Router();
let Food = require('../../models/Food');
let objectValidationService = require('../../services/object-validation-service');
let errorService = require('../../services/error-service');

// All Foods
router.route('/foods')
  .post(function(req, res) {

    let food = new Food();
    food.name = req.body.name;
    food.macros = req.body.macros;
    food.quantity = req.body.quantity;

    let validation = validateFood(food);

    if (validation.valid) {
      food.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Food created!' });
      });
    } else {
      res.json({ message: errorService.missingParam(validation.invalidKeys) });
    }

  })
  .get(function(req, res) {
    Food.find(function(err, posts) {
      if (err)
        res.send(err);

      res.json(posts);
    });
  });

// Singular Food
router.route('/foods/:food_id')
  .get(function(req, res) {
    food.findById(req.params.food_id, function(err, food) {
      if (err) {
        res.send(err);
      }
      res.json(food);
    });
  })
  .put(function(req, res) {
    Food.findById(req.params.food_id, function(err, food) {

      if (err)
        res.send(err);

      food.name = req.body.name;  // update the foods info
      food.macros = req.body.macros;
      food.quantity = req.body.quantity;

      let validation = validateFood(food);

      if (validation.valid) {
        food.save(function(err) {
          if (err)
            res.send(err);

          res.json({ message: 'Food updated!' });
        });
      } else {
        res.json({ message: errorService.missingParam(validation.invalidKeys) });
      }

    });
  })
  .delete(function(req, res) {
    Food.remove({
      _id: req.params.food_id
    }, function(err, food) {
      if (err)
        res.send(err);

      res.json({ message: 'Successfully deleted' });
    });
  });

function validateFood (food) {
  let main = objectValidationService.validate(food, ['name', 'quantity']);
  let macros = objectValidationService.validate(food.macros, ['carbs', 'fats', 'protein']);

  return {
    valid: main.valid && macros.valid,
    invalidKeys: main.invalidKeys.concat(macros.invalidKeys.map(x => `macro.${x}`))
  }
}

module.exports = router;
