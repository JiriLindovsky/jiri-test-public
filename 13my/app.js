(function () {
    'use strict';
    angular.module('App13my', [])
        .controller('Controller13my', Controller)
        .filter('replace', replaceFilterFactory);
    function replaceFilterFactory() {
        return function (input, first, second) {
            input = input || "";
            input = input.replace(first, second);
            return input;
        };
    }
    Controller.$inject = ['$scope', 'replaceFilter'];
    function Controller($scope, replaceFilter) {
        $scope.original = "Yakkov likes cookies";
        $scope.sayLovesMessage = function () {
            var message = "Yakkov likes to eat snacks.";
            message = replaceFilter(message, "likes", "loves");
            return message;
        };
    }
    ;
})();
