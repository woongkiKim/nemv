var createError = require('http-errors');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hello', function(req, res, next) {
 res.send({ msg: 'hello', a: 2222})
});
// 일일이 소설만들어 쓸 수 없다. 모듈로 쪼개




// 에러처리는 * 기억하라
// api 에러
router.all('*', function(req, res, next) {
 next(createError(404, '그런 api 없어요'))
});

module.exports = router;
