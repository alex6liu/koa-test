const mongoose = require('mongoose')

// 账户的数据库模型
const UserSchema = new mongoose.Schema({
  username:String,
  password:String,
  email:{type:String,unique:true,dropDups: true}
});

const User = mongoose.model('User', UserSchema);

module.exports = User