// load .env data into process.env
require("dotenv").config();

// Web server config
const express = require('express');
const app = express();
// const PORT = process.env.API_PORT || 8080;
const path = require('path');
const logger = require('morgan');

// PG database client/connection setup
const db = require('./db');

const dbHelpers = require('./helpers/dbHelpers')(db);
// -- const sassMiddleware = require("./lib/sass-middleware");



const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

const bcrypt = require('bcryptjs');
const cookieSession = require('cookie-session')

app.use(express.json());
// -- app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

const methodOverride = require('method-override')
app.use(methodOverride('_method'))  // override with POST having ?_method=DELETE


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(logger('dev'));

// -- app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// app.use(
//   "/styles",
//   sassMiddleware({
//     source: __dirname + "/styles",
//     destination: __dirname + "/public/styles",
//     isSass: false, // false => scss, true => sass
//   })
// );

// --------------------------------------------------
// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const packagesRouter = require('./routes/packages');
const messagesRouter = require('./routes/messages');
const ordersRouter = require('./routes/orders');
const reviewsRouter = require('./routes/reviews');

// --------------------------------------------------

// Mount all resource routes
app.use('/', indexRouter); // home page

// --------------------------------------------------
app.use('/api/users', usersRouter(dbHelpers));
app.use('/api/packages', packagesRouter(dbHelpers));
app.use('/api/messages', messagesRouter(dbHelpers));
app.use('/api/orders', ordersRouter(dbHelpers));
app.use('/api/reviews', reviewsRouter(dbHelpers));

// --------------------------------------------------
// app.listen(PORT, () => {
//   console.log(`safe2ship is listening on port ${PORT}`);
// });

module.exports = app;
