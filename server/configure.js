/**
 * @author ivoshet
 */

const hbs = require('express-handlebars');
const path = require('path');
const routes = require('./routes');
const express = require('express');
const moment = require('moment');

module.exports = app => {
  app.engine(
    'hbs',
    hbs({
      extname: 'hbs',
      defaultLayout: 'main',
      layoutsDir: path.join(app.get('views'), '/layouts'),
      partialsDir: path.join(app.get('views'), '/partials'),
      helpers: {
        timeago: timestamp => {
          return moment(timestamp)
            .startOf('minute')
            .fromNow();
        },
      },
    })
  );
  app.set('view engine', 'hbs');
  //call routing
  routes.initialize(app, new express.Router());
  return app;
};
