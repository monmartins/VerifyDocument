angular.module('verifydocument').controller('TokenController', function($scope, $http, $location) {
    
        $scope.usuario = {};
        $scope.mensagem = '';
        $scope.hash = '';
    
        $scope.autenticar = function() {
    
            var usuario = $scope.usuario;
    
            $http.post('/autenticar', {name: usuario.name,
                address: usuario.address,
                rg: usuario.rg,
                 cpf: usuario.cpf,
                 cep: usuario.cep,
                 city: usuario.city,
                 estate: usuario.estate
                })
            .then(function(s) {
                $location.path('/');
                if(s.data.hash==""){
                    $scope.mensagem = s.data.messageAlert;
                    $scope.hash = "";    

                }else{
                    $scope.hash = s.data.hash.substring(0,16)+" "+
                    s.data.hash.substring(16,32)+" "+
                    s.data.hash.substring(32,48)+" "+
                    s.data.hash.substring(48,64)+" "+
                    s.data.hash.substring(64,80)+" "+
                    s.data.hash.substring(80,96)+" "+
                    s.data.hash.substring(96,112)+" "+
                    s.data.hash.substring(112,128); 
                    $scope.mensagem = "";    
                }

            }, function(erro) {
                console.log("erro");
                $scope.usuario = {};
                $scope.mensagem = 'Preenchimento do formulário ocorreu de maneira errada,preencha todos os campos.';
            });
        };
    });