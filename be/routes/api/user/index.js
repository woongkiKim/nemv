var createError = require('http-errors');
var express = require('express');
var router = express.Router();

const us = [
  {
    name: '김김김',
    age: 24
  },
  {
    name: '이이이',
    age: 34
  }
]

// get, post, put, delete => RESTful

router.get('/', (req, res, next) => {
  console.log(req.query)
  console.log(req.body)
 res.send({ users: us, msg: 'get ok' })
});

// post: 누가 입력할 때
router.post('/', (req, res, next) => {
  console.log(req.query) // Get의 경우 query로 넘겨지고
  console.log(req.body) // Post의 경우 body로 넘겨진다
  res.send({success: true, msg: 'post ok'})
})

// put: 누가 수정할 때
router.put('/', (req, res, next) => {
  console.log(req.query)
  console.log(req.body)
  res.send({success: true, msg: 'put ok'})
})

// delete
router.delete('/', (req, res, next) => {
  console.log(req.query)
  console.log(req.body)
  res.send({success: true, msg: 'delete ok'})
})



// api 에러
router.all('*', function(req, res, next) {
 next(createError(404, '그런 api 없어요'))
});

module.exports = router;
