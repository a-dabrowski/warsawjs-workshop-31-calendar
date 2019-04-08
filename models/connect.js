const mongoose = require('mongoose');
const { DB_HOST } = require('../constants');

const db = mongoose.connection; //one db at a time, so it is a channel and we can listen for events§

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.info(`Connected to db | Host: ${DB_HOST}`);
});

mongoose.connect(DB_HOST, { useNewUrlParser: true });
mongoose.set('debug', true);
