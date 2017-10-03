const express = require('express');
const app = express();

const mysql = require('mysql');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

function connect() {
    let con = mysql.createConnection({
        host: 'localhost',
        port: 6033,
        user: 'seng365',
        password: 'secret',
        database: 'lab3'
    });
    return con;
}

app.get("/users", function(req, res){
    const con = connect();
    con.connect(function(err){
        if(!err) {
            console.log("Connected to the database");
            con.query("SELECT * FROM users", function (err, rows, fields) {
                con.end();
                if(!err) {
                    res.send(JSON. stringify(rows));
                } else {
                console.log(err);
                res.send({"ERROR":"Error getting uses"});
            }
        });
    } else {
        console.log("Error connecting to the database");
        res.send({"ERROR":"Error connecting to the database"});
        }
    });
});

app.get("/users/:id", function(req, res){
    const con = connect();
    let id = req.params.id;

    con.connect(function(err){
        if(!err) {
            console.log("Connected to the database");
            console.log(id);
            con.query("SELECT username FROM users WHERE user_id = " + id, function (err, rows, fields) {
                con.end();
                if(!err) {
                    console.log(rows);
                    res.send(JSON. stringify(rows));
                } else {
                    console.log(err);
                    res.send({"ERROR":"Error getting uses"});
                }
            });
        } else {
            console.log("Error connecting to the database");
            res.send({"ERROR":"Error connecting to the database"});
        }
    });
});

app.post('/users', function(req, res){
    let user_data = {
        "username": req.body.username
    };

    const con = connect();

    con.connect(function(err){
        if(!err) {
            console.log("Connected to the database");
            let user = user_data['username'].toString();
            const sql = "INSERT INTO users (username) VALUES ?";

            let values = [
                [user]
            ];

            con.query(sql, [values], function (err, result) {
                con.end();
                if(!err) {
                    res.send({"SUCCESS":"Successfully inserted user"});
                } else {
                    console.log(err);
                    res.send({"ERROR":"Error inserting user"});
                }
            });
        } else {
            console.log("Error connecting to the database");
            res.send({"ERROR":"Error connecting to the database"});
        }
    });
});

app.listen(3000, function() {
    console.log('Example app listening on port ' + 3000);
});