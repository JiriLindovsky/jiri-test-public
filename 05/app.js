(function () {
    'use strict';
    angular.module('myFirstApp', [])
        .controller('myFirstController', function ($scope) {
        $scope.name = "Yakkov";
        $scope.sayHello = function () {
            return "Hello Coursera!";
        };
    });
})();
