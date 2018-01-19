var mongoose = require('mongoose');
var jwt  = require('jsonwebtoken'); 
const crypto = require('crypto');
//https://www.freeformatter.com/hmac-generator.html#ad-output

module.exports = function(app) {

     var api = {};
     var model = mongoose.model('Usuario');

     api.generate = function(req, res) {
         const secret = 'put secret key here';
         const hash = crypto.createHmac('sha512', secret)
                            .update(req.body.name+
                                    "\n"+req.body.address+
                                    "\n"+req.body.rg+
                                    "\n"+req.body.cpf+
                                    "\n"+req.body.cep+
                                    "\n"+req.body.city+
                                    "\n"+req.body.state)
                            .digest('hex');
        var user = new model();
        user.name = req.body.name;
        user.address = req.body.address;
        user.rg = req.body.rg;
        user.cpf = req.body.cpf;
        user.cep = req.body.cep;
        user.city = req.body.city;
        user.estate = req.body.estate;
        user.hash = hash;

        try {
            user.save(function (err, user) {
                if (err){                    
                    console.log(err) ;
                    res.send({messageAlert:"Preencha todo os campos corretamente.",hash:""}).end();
                    return;
                } else{
                    console.log("user")
                    console.log(user)
                    console.log("/user")
                    res.send({messageAlert:"",hash:hash}).end();
                    return;
                }
            });
            
        }
        catch(err) {
            res.send({messageAlert:"Preencha todo os campos corretamente.",hash:""}).end();
        }
        

     };

    api.verificaToken = function(req, res, next) {

         var token = req.headers['x-access-token'];

         if (token) {
             console.log('Token recebido, decodificando');
             jwt.verify(token, app.get('secret'), function(err, decoded) {
                 if (err) {
                     console.log('Token rejeitado');
                     return res.sendStatus(401);
                 } else {
                     console.log('Token aceito')
                     req.usuario = decoded;    
                     next();
                  }
            });
        } else {
            console.log('Nenhum token enviado');
            return res.sendStatus(401);
          }
    }

    return api;
};