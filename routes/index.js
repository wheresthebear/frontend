exports.home = function(req, res) {
  res.render('woo', {
      title: 'THIS IS THE INDEX PAGE',
      description: 'Does it work',
      author: '@weavermj'
  });
};
