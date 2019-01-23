const router = require('express').Router();
const articleController = require('../../controllers/nytController');

//Matches with /API/nyt

router
.route('/')
.get(articleController.findAll);

module.exports = router;