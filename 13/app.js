(function () {
    'use strict';
    angular.module('App13', [])
        .controller('Controller13', Controller)
        .filter("loves", lovesFilterFactory);
    function lovesFilterFactory() {
        return function (input) {
            input = input || "";
            input = input.replace("likes", "loves");
            return input;
        };
    }
    Controller.$inject = ['$scope', 'lovesFilter'];
    function Controller($scope, lovesFilter) {
        $scope.original = "Yakkov likes cookies";
        $scope.sayLovesMessage = function () {
            var message = "Yakkov likes to eat snacks.";
            message = lovesFilter(message);
            return message;
        };
    }
    ;
})();
