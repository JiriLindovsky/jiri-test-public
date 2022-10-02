declare var angular: any;

(function(){
    'use strict';
    

    angular.module('App11',[])
    .controller('Controller11',Controller11);
    Controller11.$inject=['$scope', '$filter'];
    function Controller11($scope,$filter){
       $scope.name="Yakkov";
        $scope.stateOfBeing="hungry";

       $scope.displayMessage=function () {
           return "Yakkow eats!";   

        
       }
       $scope.feedYakkov=function(){
        if ($scope.stateOfBeing=="hungry")
        $scope.stateOfBeing="fed";
        else
        $scope.stateOfBeing="hungry";
       }
      $scope.operation="+";
      $scope.operand1=1;
      $scope.operand2=2;
      $scope.expr= function () {return eval($scope.operand1+$scope.operation+$scope.operand2); }
      $scope.cos= function(x) {return Math.cos(x);}
       
    };
       
})();