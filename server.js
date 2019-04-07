const express = require('express');
const morgan = require('morgan'); //logging requests
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const { PORT, SESSION_OPTIONS } = require('./constants');
const rootRouter = require('./rootRouter');

const app = express();

//express session connect with passport to keep itself logged

app.use(cors());
app.use(morgan('dev'));//also possible is dev
app.use(session(SESSION_OPTIONS));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(rootRouter);

app.set('port', PORT);

app.listen(app.get('port'), () => {
  console.info( `express app running on port: ${app.get('port')}`);
});
