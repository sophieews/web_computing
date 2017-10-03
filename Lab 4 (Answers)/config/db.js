var mysql = require('mysql');
 
var state = {
  pool: null
};
 
exports.connect = function(done) {
  state.pool = mysql.createPool({
    host: 'localhost',
    port: '6603',
    user: 'root',
    password: "",
    database: "seng365"
  });
  done();
};
 
exports.get = function() {
  return state.pool;
};
