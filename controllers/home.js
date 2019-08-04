module.exports = {
  index: (req, res) => {
    let viewModel = {
      image: [
        {
          uniqueId: 1,
          title: 'SamepleOne',
          filename: 'one',
        },
        {
          uniqueId: 2,
          title: 'SampleTwo',
          filename: 'two',
        },
        {
          uniqueId: 3,
          title: 'SampleThree',
          filename: 'three',
        },
      ],
    };
    res.render('index', viewModel);
  },
};
