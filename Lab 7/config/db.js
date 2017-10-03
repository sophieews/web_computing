const mysql = require('mysql');

const state = {
    pool: null
};

exports.connect = function(done) {
    state.pool = mysql.createPool({
        host: 'localhost',
        user: 'seng365',
        password: 'secret',
        port: '6033',
        database: 'chat-app'
    });
    done();
};

exports.get = function() {
    return state.pool;
};

