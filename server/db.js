const mongoose  = require('mongoose');
const config    = require('./src/libs/config');

require('./src/models/initialValueDB/initially');

mongoose.connect(config.get('mongoose:uri'), { useNewUrlParser: true, useFindAndModify: false });
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on("error", () => console.log("connection to database FALSE!"))
  .on("disconected", () => console.log("disconcted from database!"))
  .once("open", () => console.log("connection to database TRUE!"));
