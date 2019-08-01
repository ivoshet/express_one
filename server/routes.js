const home = require('../controllers/home');
const image = require('../controllers/image');

module.exports.initialize = app => {
  /*get and post requist differents by information what they pass in browser line
    get - passes explicity 
    post - no explicity
    :image_id - is information in requiest, for example: https://google/picture_one
  */
  app.get('/', home.index);
  app.get('/images/:image_id', image.index);

  app.post('/images', image.create);
  app.post('/images/:image_id/like', image.like);
  app.post('/images/:image_id/comment', image.comment);
};
