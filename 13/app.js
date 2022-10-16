(function () {
    'use strict';
    angular.module('App13', [])
        .controller('Controller13', Controller)
        .filter("loves", lovesFilterFactory)
        .filter('truth', TruthFilterFactory);
    function lovesFilterFactory() {
        return function (input) {
            input = input || "";
            input = input.replace("likes", "loves");
            return input;
        };
    }
    function TruthFilterFactory() {
        return function (input, target, replace) {
            input = input || "";
            input = input.replace(target, replace);
            return input;
        };
    }
    Controller.$inject = ['$scope', 'lovesFilter'];
    function Controller($scope, lovesFilter) {
        $scope.original = "Yakkov likes healthy cookies";
        $scope.sayLovesMessage = function () {
            //let message="Yakkov likes to eat snacks."
            var message = $scope.original;
            message = lovesFilter(message);
            return message;
        };
    }
    ;
})();
