const config    = require('./src/libs/config');
require("./db");

const app = require('./src/app');

app.listen(config.get('port'),  () => {
    console.log(`Server started, port ${config.get('port')}`);
});
