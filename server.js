const express = require('express');
const config = require('./server/configure');
const path = require('path');

let app = express();

/**
 * @description setting app
 * @param {Object} app - is object of express
 */
const settingApp = app => {
  app.set('port', process.env.PORT || 3300);
  app.set('views', path.join(__dirname, '/views'));
  return app;
  // app = config(app);
};

/**
 * @description main function
 */
const server = () => {
  settingApp(app);
  app.listen(app.get('port'), () => {
    console.log(`server work ${app.get('port')}`);
  });
};

server();
