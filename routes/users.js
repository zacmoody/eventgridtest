var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.headers)
  console.log(req.body)
  res.send("success");
});
router.post('/', function(req, res, next) {
  console.log(req.headers)
  console.log(req.body)
  res.send("success");
});

module.exports = router;
