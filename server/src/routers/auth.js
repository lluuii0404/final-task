const express  = require("express"),
      mongoose = require("mongoose"),
      jwt      = require('jsonwebtoken'),
      passport = require('passport');
const router = express.Router();

const User = require('../models/userModel');

/* POST login. */

router.post('/signin', (req, res, next) => {
    console.log('LOGIN req.body ---< ', req.body);
    debugger;
    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                message: 'Something is not right',
                user   : user
            });
        }
        // console.log('LOGIN USER ---< ', user);
        req.login(user, {session: false}, (err) => {
            if (err) res.send(err);
            // console.log('USER   -< ', user);
            const token = jwt.sign({
                userId: user._id,
                user_first_name: user.first_name,
                user_last_name: user.last_name,
                user_nick_name: user.nick_name,
                user_email: user.email,
                user_pass: user.password,
                user_phone: user.phone_number,
                user_position: user.position,
                user_description: user.description
            }, 'secret', { expiresIn: '2h' });
            // console.log('LOGIN token   -< ', token);
            return res.json( { token } ); // {user, token}
        });
    })(req, res);
});

/* POST register. */
router.post('/signup', (req, res, next) => {
    if(!req.body) return res.sendStatus(400);

    const { first_name,
              last_name,
              nick_name,
              email,
              password,
              phone_number,
              position,
              description
          } = req.body;

    User.find( { email }, (err, data) => {
        if (err) {
            return next(err);
        }
        if (data.length !== 0) {
            return res.status(400).send({
                error: "user already exists"
            });
        }

        let user = new User({
            _id: new mongoose.Types.ObjectId(),
            first_name,
            last_name,
            nick_name,
            email,
            password,
            phone_number,
            position,
            description
        });

        user.save((err, data) => {
            if (err) return next(err);
            console.log('User successfully saved.');
            res.send({
                data: data,
                message: 'User successfully saved.'
            });
        });
    });

});

/* POST logout. */
router.get('/logout',(req, res, next) =>{
    res.send({
        token: null,
        message: 'Logout'
    })
});


module.exports = router;
