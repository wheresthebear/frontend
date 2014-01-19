exports.home = function(req, res) {
  res.render('index', {
      title: 'wheresthebear.org',
      description: 'Take me on a new adventure',
      author: '@weavermj'
  });
};

exports.library = function(req, res) {
  res.render('library', {
      title: 'Style library',
      description: '',
      author: '@weavermj'
  });
};

exports.woo = function(req, res) {
  res.render('woo', {
      title: 'This is the woo page',
      description: 'Does it work',
      author: '@weavermj'
  });
};