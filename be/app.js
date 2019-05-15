const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const history = require('connect-history-api-fallback');
const cors = require('cors');


const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use('/api', require('./routes/api')) // API 생성하는 구문
app.use(history());

app.use(express.static(path.join(__dirname, '../.','fe', 'dist')));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({msg: err.message});
});

module.exports = app;


const mongoose = require('mongoose')


// 모델만들기
// 1. 스키마 부터 만들자
const userSchema = new mongoose.Schema({
  name: {type: String, default: ''},
  age: {type: Number, default: 1}
})

const User = mongoose.model('User', userSchema)


// mongoose 연결

mongoose.connect('mongodb://localhost:27017/nemv', { useNewUrlParser: true }, (err) => {
  if (err) return console.log(err)
  console.log('mongoose connected!');
})


// 스키마의 CRUD
// Create
// User.create({name: '하하'})
//   .then(r => console.log(r))
//   .catch(e => console.error(e))

// Read
User.find()
.then(r => console.log(r))
.catch(e => console.error(e))

// Update
// User.updateOne({ _id: '5cdb9c141d479ce0d9225213'}, {$set: {age: 34}}) // 얘는 Promise를 받아서 then과 catch를 뱉는다.
// .then(r => {
//   console.log(r)
//   console.log('updated')
//   return User.find()
// })
// .then(r => console.log(r))
// .catch(e => console.error(e))

// delete
// User.deleteOne({name : '하하'})
// .then(r => console.log(r))
// .catch(e => console.error(e))
