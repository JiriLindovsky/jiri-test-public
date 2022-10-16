(function () {
    'use strict';
    angular.module('CounterApp15', [])
        .controller('CounterController15', Controller);
    Controller.$inject = ['$scope', '$timeout'];
    function Controller($scope, $timeout) {
        // me: inicializace scope properties
        $scope.counter = 0;
        $scope.upCounter = function () {
            $timeout(function () {
                $scope.counter++;
                console.log("Counter incremented!");
            }, 2000);
            /* //verze bez $timeout
              setTimeout(function () {
                 $scope.$apply(function(){
                 $scope.counter++;
                 console.log("Counter incremented!");
                 });
             },2000); */
            /*
            //verze nevhodna pro exceptions TO-DO
            setTimeout(function () {
                 $scope.counter++;
                 console.log("Counter incremented!");
                 $scope.$digest();//without not working
            },2000); */
        };
    }
})();
