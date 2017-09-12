let router = require('express').Router();
let Meal = require('../../models/Meal');
let objectValidationService = require('../../services/object-validation-service');
let errorService = require('../../services/error-service');

// All Meals
router.route('/meals')
  .post(function(req, res) {

    let meal = new Meal();
    meal.name = req.body.name;
    meal.recipes = req.body.recipes;
    meal.time = req.body.time;
    meal.order = req.body.order;

    let validation = objectValidationService.validate(meal, ['name']);

    if (validation.valid) {
      meal.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Meal created!' });
      });
    } else {
      res.json({ message: errorService.missingParam(validation.invalidKeys) });
    }

  })
  .get(function(req, res) {
    Meal.find(function(err, posts) {
      if (err)
        res.send(err);

      res.json(posts);
    });
  });

// Singular Meal
router.route('/meals/:meal_id')
  .get(function(req, res) {
    meal.findById(req.params.meal_id, function(err, meal) {
      if (err) {
        res.send(err);
      }
      res.json(meal);
    });
  })
  .put(function(req, res) {
    Meal.findById(req.params.meal_id, function(err, meal) {

      if (err)
        res.send(err);

      meal.name = req.body.name;
      meal.recipes = req.body.recipes;
      meal.time = req.body.time;
      meal.order = req.body.order;

      let validation = objectValidationService.validate(meal, ['name']);

      if (validation.valid) {
        meal.save(function(err) {
          if (err)
            res.send(err);

          res.json({ message: 'Meal updated!' });
        });
      } else {
        res.json({ message: errorService.missingParam(validation.invalidKeys) });
      }

    });
  })
  .delete(function(req, res) {
    Meal.remove({
      _id: req.params.meal_id
    }, function(err, meal) {
      if (err)
        res.send(err);

      res.json({ message: 'Successfully deleted' });
    });
  });

module.exports = router;
