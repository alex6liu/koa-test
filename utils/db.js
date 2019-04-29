const mongoose = require('mongoose')

module.exports = () => {
  // 连接mongodb
  const uri = 'mongodb+srv://tknnn:lbq1993727@backend-api-kxfgn.mongodb.net/test?retryWrites=true'
  mongoose.connect(uri)
  const db = mongoose.connection;
  db.once('open', () => {
    console.log('Successfully connect to db');
  });

  db.on('error', (err) => {
    console.log(err);
  });
}