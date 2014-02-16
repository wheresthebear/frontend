var sendgrid  = require('sendgrid')(
      'app21385780@heroku.com',
      'harz9ury'
    );

exports.home = function(req, res) {
  res.render('index', {
      title: 'wheresthebear.org',
      description: 'Take me on a new adventure'
  });
};

exports.library = function(req, res) {
  res.render('library', {
      title: 'Style library',
      description: ''
  });
};

exports.about = function(req, res) {
  res.render('about', {
      title: 'About',
      description: 'Find out what wheresthebear is here to do'
  });
};

exports.contact = function(req, res) {
  res.render('contact', {
      title: 'Contact',
      description: 'Send me your story of how you found me',
      errors: {},
      name: '',
      email: '',
      story: ''
  });
};

exports.contactPost = function(req, res) {
  var errors, values;
  req.assert('name', 'Name is required').notEmpty();  
  req.assert('email', 'Email is required').notEmpty();
  req.assert('email', 'Email must be a valid email address').isEmail();
  req.assert('story', 'Story must be at least 25 characters').len(25);
  errors = req.validationErrors();  

  if(!errors){   
    sendgrid.send({
      to: 'weavermjw@googlemail.com',
      from: 'contact@wheresthebear.org',
      subject: 'Bear Story!',
      text: 'Name: ' + req.body.name + '\nEmail: ' + req.body.email + '\nStory:\n ' + req.body.story
    }, function(err, json) {
    if (err) { return console.error(err); }
      console.log(json);
    });
    res.render('thanks', { 
      title: 'Thanks',
      description: 'Thank you for sending me your story'
    });
  }
  else {   
    res.render('contact', { 
      title: 'Contact',
      description: 'Send me your story of how you found me',
      errors: errors,
      name: req.body.name,
      email: req.body.email,
      story: req.body.story
    });
  }
};
