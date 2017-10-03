const express = require('express');
const app = express();

// Import the module
const bodyParser = require('body-parser');
// Tell the express app to expect json in the body of the request
app.use(bodyParser.json());

const data = require('./users.json');
const users = data.users;

app.get('/users', function (req, res) {
    res.send(users);
});

app.get('/users/:id', function(req, res) {
    let id = req.params.id;
    let res_data = "No user";

    for(let user of users){
        if(id == user.id){
            res_data = user;
            break;
        }
    }
    res.send(res_data)
});

app.post('/users', function(req, res){
    let user_data = req.body;

    users.push(user_data);
    res.send(users);
});

app.put('/users/:id', function(req, res){
    let id = req.params.id;
    let user_data = req.body;

    for (let user of users){
        if(id == user.id){
            let uid = users.indexOf(user);
            users[uid] = user_data;
            break;
        }
    }
    res.send(user_data);
});

app.delete('/users/:id', function(req, res){
    let id = req.params.id;

    for(let user of users) {
        if(id == user.id){
            var uid = users.indexOf(user);
            // remove 1 item at index 'uid'
            users.splice(uid, 1);
        }
    }
    res.send(users);
});

app.listen(3000, function() {
    console.log("Example app listening on port 3000");
});