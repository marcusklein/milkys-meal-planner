var router = require('express').Router();

var Plan = require('../../models/Plan');

var objectValidationService = require('../../services/object-validation-service');

var errorService = require('../../services/error-service');

// Get all Plans
router.route('/plans')
  .post(function(req, res) {

    var plan = new Plan();
    plan.name = req.body.name;

    let validation = objectValidationService.validate(plan, ['name']);

    if (validation.valid) {
      plan.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Plan created!' });
      });
    } else {
      res.json({ message: errorService.missingParam(validation.invalidKeys) });
    }
  })
  .get(function(req, res) {
    Plan.find(function(err, posts) {
      if (err) {
        console.log(err);
        res.send(err);
      }

      res.json(posts);
    });
  });

// Singular Plan
router.route('/plans/:plan_id')
  .get(function(req, res) {
    plan.findById(req.params.plan_id, function(err, plan) {
      if (err)
        res.send(err);
      res.json(plan);
    });
  })
  .put(function(req, res) {

    // use our plan model to find the plan we want
    Plan.findById(req.params.plan_id, function(err, plan) {

      if (err)
        res.send(err);

      plan.name = req.body.name;  // update the plans info

      let validation = objectValidationService.validate(plan, ['name']);

      if (validation.valid) {
        plan.save(function(err) {
          if (err)
            res.send(err);

          res.json({ message: 'Plan created!' });
        });
      } else {
        res.json({ message: errorService.missingParam(validation.invalidKeys) });
      }

    });
  })
  .delete(function(req, res) {
    Plan.remove({
      _id: req.params.plan_id
    }, function(err, plan) {
      if (err)
        res.send(err);

      res.json({ message: 'Successfully deleted' });
    });
  });

module.exports = router;
