// ensures logged in user is accessing the user specific route

const specAuth = (req, res, next) => {
    if (req.session.user_id !== req.params.id) {
        res.redirect('/');
    } else {
        next();
    }
};

module.exports = specAuth;