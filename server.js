const express = require('express');
const morgan = require('morgan'); //logging requests
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const { PORT } = require('./constants');
const rootRouter = require('./rootRouter');

const app = express();

app.use(cors());
app.use(morgan('dev'));//also possible is dev
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(rootRouter);

app.set('port', PORT);

app.listen(app.get('port'), () => {
  console.info( `express app running on port: ${app.get('port')}`);
});
