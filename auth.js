function auth(req, response, next) {
    console.log('authenticating requests using auth middleware component');
    next();
}

module.exports = auth;