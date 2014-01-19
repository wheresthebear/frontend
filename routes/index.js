exports.home = function(req, res) {
  res.render('index', {
      title: 'THIS IS THE INDEX PAGE',
      description: 'Does it work',
      author: '@weavermj'
  });
};

exports.woo = function(req, res) {
  res.render('woo', {
      title: 'THIS IS THE WOO PAGE',
      description: 'Does it work',
      author: '@weavermj'
  });
};