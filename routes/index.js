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

exports.about = function(req, res) {
  res.render('about', {
      title: 'About',
      description: 'Find out what wheresthebear is here to do',
      author: '@weavermj'
  });
};

exports.contact = function(req, res) {
  res.render('contact', {
      title: 'Contact',
      description: 'Send me your story of how you found me',
      author: '@weavermj'
  });
};

