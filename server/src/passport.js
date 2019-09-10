const passport       = require('passport'),
      LocalStrategy  = require('passport-local').Strategy,
      passportJWT = require("passport-jwt") ;

const User = require('./models/userModel');

const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    (email, password, done) => {
        User.findOne( {email, password}, (err, user) => {
            if (err) return done(err);
            if (!user) return done(null, false, { message: 'Incorrect email or password.'});
            return done(null, user, { message: 'Logged In Successfully'});
        })
    }
));
passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : 'secret'
    },
    (jwtPayload, done) => {
        // console.log('jwtPayload ----->', jwtPayload);
        User.findOne({email: jwtPayload.user_email}, (err, user) => {
            if (err) return done(err);
            return done(null, user);
        });
    }
));
