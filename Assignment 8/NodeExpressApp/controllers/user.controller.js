const User = require('../models/user.model');

//Simple version, without validation or sanitation

exports.user_create = function (req, res) {
    let user = new User(
        {
            email: req.body.email,
            password: req.body.password
        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User Created successfully')
    })
};
