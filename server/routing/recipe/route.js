let router = require('express').Router();
let Recipe = require('../../models/Recipe');
let objectValidationService = require('../../services/object-validation-service');
let errorService = require('../../services/error-service');

// All Recipes
router.route('/recipes')
  .post(function(req, res) {

    let recipe = new Recipe();
    recipe.name = req.body.name;
    recipe.foods = req.body.foods;

    let validation = objectValidationService.validate(recipe, ['name']);

    if (validation.valid) {
      recipe.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Recipe created!' });
      });
    } else {
      res.json({ message: errorService.missingParam(validation.invalidKeys) });
    }

  })
  .get(function(req, res) {
    Recipe.find(function(err, posts) {
      if (err)
        res.send(err);

      res.json(posts);
    });
  });

// Singular Recipe
router.route('/recipes/:recipe_id')
  .get(function(req, res) {
    recipe.findById(req.params.recipe_id, function(err, recipe) {
      if (err) {
        res.send(err);
      }
      res.json(recipe);
    });
  })
  .put(function(req, res) {
    Recipe.findById(req.params.recipe_id, function(err, recipe) {

      if (err)
        res.send(err);

      recipe.name = req.body.name;
      recipe.foods = req.body.foods;

      let validation = objectValidationService.validate(recipe, ['name']);

      if (validation.valid) {
        recipe.save(function(err) {
          if (err)
            res.send(err);

          res.json({ message: 'Recipe updated!' });
        });
      } else {
        res.json({ message: errorService.missingParam(validation.invalidKeys) });
      }

    });
  })
  .delete(function(req, res) {
    Recipe.remove({
      _id: req.params.recipe_id
    }, function(err, recipe) {
      if (err)
        res.send(err);

      res.json({ message: 'Successfully deleted' });
    });
  });

module.exports = router;
