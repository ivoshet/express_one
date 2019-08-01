const home = require('../controllers/home');
const image = require('../controllers/image');

module.exports.initialize = (app, router) => {
  /*get and post requist differents by information what they pass in browser line
    get - passes explicity 
    post - no explicity
    :image_id - is information in requiest, for example: https://google/picture_one
  */
  app.get('/', home.index);
  app.get('/image/:image_id', image.index);

  //post not callint explicity in line browser
  app.post('/image', image.create);
  app.post('/image/:image_id/like', image.like);
  app.post('/image/:image_id/comment', image.comment);
  app.use('/', router);
};
