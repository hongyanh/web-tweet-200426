var express = require('express');
var router = express.Router();

/* GET tweet listing. */
router.get('/', function(req, res, next) {
  const tweets = [{
    content: 'message1'
  }, {
    content: 'message2'
  }]
  res.send(`respond with a resource ${JSON.stringify(tweets)}`);
});

router.post('/', function(req, res, next) {
  res.send(`respond with a post resource ${req.body.content}`);
});

router.delete('/:id', function(req, res, next) {
  res.send(`respond with a delete resource for ${req.params.id}`);
});

module.exports = router;
