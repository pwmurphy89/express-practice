var express = require('express');
var router = express.Router();
var students = [
	"Tristan",
	"Josh",
	"Bogden",
	"Laz",
	"Keith",
	"Will",
	"Curtis",
	"Joe",
	"Koshan",
	"Patrick",
	"Johnathan",
	"Jeremy"
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/students', function(req, res, next) {
	students.sort();
  res.render('students', {studentsArray: students});
});

router.get('/students/reverse', function(req, res, next) {
	students.reverse()

  res.render('reverse', { studentsArray: students });
});
module.exports = router;
