var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const User = require('../../../models/users')
router.get('/', function(req, res, next) {
  User.find()
    .then(r => {
      res.send({ success: true, users: r })
    })
    .catch(e => {
      res.send({ success: false })
    })
  // console.log(req.query)
  // console.log(req.body)
 // res.send({ users: us, msg: 'get ok' })
});

// post: 누가 입력할 때
router.post('/', (req, res, next) => {
  const { name, age } = req.body
  const u = new User({ name, age })
  u.save()
    .then(r => {
      res.send({ success: true, msg: r })
    })
    .catch(e => {
      res.send({ success: false, msg: e.message })
    })
  // console.log(req.query) // Get의 경우 query로 넘겨지고
  // console.log(req.body) // Post의 경우 body로 넘겨진다
  // res.send({success: true, msg: 'post ok'})
})

// put: 누가 수정할 때
router.put('/:id', (req, res, next) => {
  const id = req.params.id
  const { name, age } = req.body
  User.updateOne({ _id: id }, { $set: { name, age }})
    .then(r => {
      res.send({ success: true, msg: r })
    })
    .catch(e => {
      res.send({ success: false, msg: e.message })
    })
  // res.send({ success: true, msg: 'put ok' })
})

// delete
router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  User.deleteOne({ _id: id })
    .then(r => {
      res.send({ success: true, msg: r })
    })
    .catch(e => {
      res.send({ success: false, msg: e.message })
    })
  res.send({ success: true, msg: 'del ok' })
})

router.all('*', function(req, res, next) {
  next(createError(404, '그런 api 없어'));
});
module.exports = router;
