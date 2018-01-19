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
                console.log(s.data);
                $location.path('/');
                if(s.data.hash=""){
                    $scope.mensagem = s.data.messageAlert;
                    $scope.hash = s.data.messageAlert;    

                }else{
                    $scope.hash = s.data.hash;     
                }

            }, function(erro) {
                $scope.usuario = {};
                $scope.mensagem = 'Preenchimento do formulário ocorreu de maneira errada.';
            });
        };
    });