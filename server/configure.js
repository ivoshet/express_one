/**
 * @author ivoshet
 */

const hbs = require('express-handlebars');
const path = require('path');
const routes = require('./routes');

module.exports = app => {
  app.engine(
    'hbs',
    hbs({
      extname: 'hbs',
      defaultLayout: 'main',
      layoutsDir: path.join(app.get('views'), '/layouts'),
      partialsDir: path.join(app.get('views'), '/partials'),
    })
  );
  app.set('view engine', 'hbs');
  //call routing
  routes.initialize(app);
  return app;
};
