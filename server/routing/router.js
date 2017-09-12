var router = require('express').Router();

var morgan = require('morgan');

// Logging:
router.use(morgan('dev'));

router.get('/', function(req, res) {
  res.json({ message: 'Eat clen, tren hard, anavar give up.' });
});

// Add headers
router.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// Plans
var planRoutes = require('./plan/route');
router.use(planRoutes);

// Foods
var foodRoutes = require('./food/route');
router.use(foodRoutes);

// Foods
var mealRoutes = require('./meal/route');
router.use(mealRoutes);

// Foods
var recipeRoutes = require('./recipe/route');
router.use(recipeRoutes);

module.exports = router;
