const express     = require("express"),
      cors        = require("cors"),
      bodyParser  = require("body-parser"),
      logger      = require('morgan'),
      passport    = require('passport');

require('./passport');

const app = express();

const authRouter     = require("./routers/auth");
const usersRouter    = require("./routers/users");
const companyRouter  = require("./routers/companies");


app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.append("Access-Control-Allow-Origin", "*");
    res.append("Access-Control-Allow-Methods", 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.append("Access-Control-Allow-Headers", "Content-Type");
    res.append("Content-Type", "application/json");
    next();
});

app.use("/api/", authRouter);
app.use("/api/", passport.authenticate('jwt', {session: false}), usersRouter);
app.use("/api/", passport.authenticate('jwt', {session: false}), companyRouter);

app.use((err, req, res, next) => {
    const isNotFound = ~err.message.indexOf("not found");
    const isCastError = ~err.message.indexOf("Cast to ObjectId failed");

    if (err.message && (isNotFound || isCastError)) {
        return next(err);
    }
    res.status(400).send({ error: err.message });
});

module.exports = app;
