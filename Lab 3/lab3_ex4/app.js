const express = require('express');
const app = express();

const mysql = require('mysql');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'seng365',
    password: 'secret',
    port: '6033',
    database: 'lab3'
});

function get_users(req, res) {
    pool.getConnection(function(err, connection) {
        if(err) {
            console.log(err);
            res.json({"ERROR" : "Error in connection database"});
            return;
        }
        console.log('connected as id ' + connection.threadId);

        connection.query("SELECT * FROM users", function(err, rows){
            connection.release();
            if(!err) {
                res.json(rows);
            }
        });

        connection.on('error', function(err) {
            res.json({"ERROR" : "Error in connection database"});
        });
    });
}

app.get("/users", function(req, res) {-
    get_users(req, res);
});

function post_user(req, res, user_data){
    pool.getConnection(function(err, connection){
        if(err) {
            res.json({"ERROR": "Error in connection database"});
            return;
        }
        console.log("connected as id " + connection.threadId);

        let user = user_data['username'].toString();
        const sql = "INSERT INTO Users (username) VALUES ?";

        console.log(user);

        let values = [
            [user]
        ];

        connection.query(sql, [values], function(err, result) {
            connection.release();
            if(!err) {
                res.json({"SUCCESS":"successfully inserted user"});
            } else {
                console.log(err);
                res.json({"ERROR" : "Error in connection database"});
                return;
            }
        });
    });
}

app.post('/users', function(req, res){
    var user_data = {
        "username": req.body.username
    };
    console.log(req);
    post_user(req, res, user_data);
});

app.listen(3000, function() {
    console.log('Example app listening on port ' + 3000);
});