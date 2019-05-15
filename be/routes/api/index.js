var createError = require('http-errors');
var express = require('express');
var router = express.Router();


// 일일이 소설만들어 쓸 수 없다. 모듈로 쪼개(쪼갠 모듈을 연결해주는 구문)
router.use('/test', require('./test'))
router.use('/user', require('./user'))


// 에러처리는 * 기억하라
// api 에러
router.all('*', function(req, res, next) {
 next(createError(404, '그런 api 없어요'))
});

module.exports = router;
