const mongoose  = require('mongoose');
const config    = require('./src/libs/config');

mongoose.connect(config.get('mongoose:uri'), { useNewUrlParser: true, useFindAndModify: false });
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on("error", () => console.log("connection to database FALSE!"))
  .on("disconected", () => console.log("disconcted from database!"))
  .once("open", () => console.log("connection to database TRUE!"));

const app = require('./src/app');

app.listen(config.get('port'),  () => {
    console.log(`Server started, port ${config.get('port')}`);
});
