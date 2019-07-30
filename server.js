const express = require('express');
// const config = require('./server/configure');
const path = require('path');

let app = express();

/**
 * @description setting app
 */
const settingApp = () => {
  app.set('port', process.env.PORT || 3300);
  app.set('views', path.join(__dirname, '/views'));
  // app = config(app);
};

/**
 * @description main function
 */
const server = () => {
  settingApp();
  app.listen(app.get('port'), () => {
    console.log(`server work ${app.get('port')}`);
  });
};

server();
