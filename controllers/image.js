module.exports = {
  index: (req, res) => {
    res.send('index image controller');
  },
  create: (req, res) => {
    res.send('create image controller');
  },
  comment: (req, res) => {
    res.send('comment image controller');
  },
  like: (req, res) => {
    res.send('like image controller');
  },
};
