module.exports = function(app) {
    
    var api = app.api.generateToken;
    app.post('/autenticar', api.generate);
};