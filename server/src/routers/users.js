const express  = require("express"),
      mongoose = require("mongoose");
const router  = express.Router();

const User = require("../models/userModel");

router.get("/users", (req, res, next) => {
    User.find( {}, (err, users) => {
        if(err) return next(err);
        res.send(users)
    });
});

router.get('/users/:id', (req, res, next) => {
    const { id } = req.params;
    User.findOne({ _id: id }, function(err, user){
        if(err) return next(err);
        res.send(user);
    });
});

router.put('/users/:id', (req, res, next) => {
    if(!req.body) return res.sendStatus(400);

    const { id } = req.params;
    const queryBody = req.body;
    let newUserData = {};

    for ( let prop in queryBody ){
        if (prop === "first_name") newUserData.first_name = queryBody[prop];
        if (prop === "last_name") newUserData.last_name = queryBody[prop];
        if (prop === "nick_name") newUserData.nick_name = queryBody[prop];
        if (prop === "email") newUserData.email = queryBody[prop];
        if (prop === "password") newUserData.password = queryBody[prop];
        if (prop === "phone_number") newUserData.phone_number = queryBody[prop];
        if (prop === "position") newUserData.position = queryBody[prop];
        if (prop === "description") newUserData.description = queryBody[prop];
    }
    newUserData.updatedAt = new Date().toJSON();

    User.findOneAndUpdate({_id: id}, newUserData, {new: true}, function(err, user){
        if(err) return next(err);
        res.send(user);
    });
});

router.delete('/users/:id', (req, res, next) => {
    const { id } = req.params;

    User.findByIdAndDelete({ _id: id }, function(err, user){
        if(err) return next(err);
        res.send(user);
    });
});


module.exports = router;
