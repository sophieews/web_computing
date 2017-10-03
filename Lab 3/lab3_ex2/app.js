const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    port: 6033,
    user: 'seng365',
    password: 'secret',
    database: 'lab3'
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO users (username) VALUES ?";
    var values = [
        ["James"],
        ["Lotte"],
        ["Adrien"],
        ["Elske"],
        ["Alex"]
    ];
    con.query(sql, [values], function (err, result) {
        if(err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
    con.query("SELECT * FROM users", function (err, result) {
        if(err) throw err;
        console.log(result)
    })
});