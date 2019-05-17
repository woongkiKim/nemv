const mongoose = require('mongoose')


// 모델만들기
// 1. 스키마 부터 만들자
const userSchema = new mongoose.Schema({
  name: {type: String, default: '', unique: true, index: true}, // unigue : 중복X, index : 빨리 서치됨
  age: {type: Number, default: 1}
})

const User = mongoose.model('User', userSchema)

module.exports = User
