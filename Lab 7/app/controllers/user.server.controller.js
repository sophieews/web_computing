const User = require('../models/user.server.model');

exports.list = function(req, res){
    User.getAll(function(result){
        res.json(result);
    });
};

exports.create = function(req, res){
    let user_data = {
        "username": req.body.username
    };

    let user = user_data['username'].toString();

    let values = [
        [user]
    ];

    User.insert(values, function(result){
        res.json(result);
    });
};

exports.read = function(req, res){
    let id = req.params.userId;
    User.getOne(id, function(result){
        res.json(result);
    });
};

exports.update = function(req, res){
    return null;
};

exports.delete = function(req, res){
    return null;
};

exports.userById = function(req, res){
    return null;
};