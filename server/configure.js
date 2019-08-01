/**
 * @author ivoshet
 */

const hbs = require('express-handlebars');
const path = require('path');

module.exports = app => {
  app.engine(
    'hbs',
    hbs({
      extname: 'hbs',
      defaultLayout: 'main',
      layoutsDir: path.join(app.get('views'), '/layouts'),
      partialsDir: path.join(app.get('views'), '/partials'),
    }).engine
  );
  app.set('view engine', 'hbs');
  return app;
};
