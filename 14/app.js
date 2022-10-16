(function () {
    'use strict';
    angular.module('CounterApp14', [])
        .controller('CounterController14', Controller);
    Controller.$inject = ['$scope'];
    function Controller($scope) {
        $scope.onceCounter = 0;
        $scope.counter = 0;
        $scope.showNumberOfWatchers = function () {
            //console.log($scope);
            console.log("pocet sledovacu:", $scope.$$watchersCount);
        };
        $scope.countOnce = function () {
            $scope.onceCounter = 1;
        };
        $scope.upCounter = function () {
            $scope.counter++;
        };
        // manually setting up watcher
        $scope.$watch('onceCounter', function (newValue, oldValue) {
            console.log("stara hodnota onceCounter:", oldValue);
            console.log("nova hodnota once Counter:", newValue);
        });
        // manually setting up watcher
        $scope.$watch('counter', function (newValue, oldValue) {
            console.log("stara hodnota counteru:", oldValue);
            console.log("nova hodnota counteru:", newValue);
        });
    }
    ;
})();
