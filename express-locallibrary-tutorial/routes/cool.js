var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cool',
  { title: "You're so cool",
    but: "But not as cool as you think"
  });
});

module.exports = router;
