const bcrypt = require('bcryptjs');

const User = require('../models/user');

exports.getLogin = (req, res, next) => {

    //const isLoggedIn = req.get('Cookie').split(';')[0].trim().split('=')[1];

    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isLoggedIn: req.session.isLoggedIn
    });
};

exports.getSignup = (req, res, next) => {
    res.render('auth/signup', {
      path: '/signup',
      pageTitle: 'Signup',
      isLoggedIn: false
    });
  };

  exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.redirect('/login');
            }

            bcrypt.compare(password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        req.session.isLoggedIn = true;
                        req.session.user = user;

                        // Use the session save callback to ensure redirect happens after session save
                        return req.session.save(err => {
                            if (err) {
                                console.error(err);
                                return next(err); // Pass the error to the error handling middleware
                            }
                            return res.redirect('/');
                        });
                    }
                    // If passwords don't match, redirect to login
                    return res.redirect('/login');
                })
                .catch(err => {
                    console.error(err);
                    return res.redirect('/login');
                });
        })
        .catch(err => {
            console.error(err);
            return next(err); // Pass unexpected errors to error handling middleware
        });
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  User.findOne({email: email}).then(userDoc => {
    if(userDoc){
      return res.redirect('/');
    }
    return bcrypt.hash(password, 12)
    .then(hashedPass => {
      const user = new User({
        email: email,
        password: hashedPass,
        cart: { items: []}
      });
      return user.save();
    })
    .then(result => {
      res.redirect('/login');
    });
  })
  .catch(err => {console.log(err)});
};

exports.postLogout = (req, res, next) => {
    //req.isLoggedIn = true;
    //res.setHeader('Set-Cookie', 'isLoggedIn=true');
    req.session.destroy(() => {
        res.redirect('/');
    });
};