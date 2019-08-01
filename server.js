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
  //setting static files
  app.use('/public/', express.static(path.join(__dirname, '../public')));
  //error handler
  if ('development' === app.get('env')) {
    app.use(errorHandler);
  }
  try {
    app = config(app);
  } catch (e) {
    console.log(`error in config calling: ${e}`);
  }
  return app;
};
/**
 * @description error handler function
 */
const errorHandler = (err, req, res, next) => {
  res.status(500);
  res.render('error', { error: err });
};

/**
 * @description main function
 * app.listen  - is calling server
 */
const server = () => {
  try {
    settingApp(app);
  } catch (e) {
    console.log(`error settingApp: ${e}`);
  }
  //call server
  app.listen(app.get('port'), () => {
    console.log(`server work ${app.get('port')}`);
  });
};

server();
