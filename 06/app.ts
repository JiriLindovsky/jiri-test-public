declare var angular: any;

(function(){
    'use strict';
    

    angular.module('nameCalculator',[])
    .controller('nameCalculatorController',function($scope){
       $scope.name="";
       $scope.value=0;
       $scope.displayCalculatedValue=function()
       {
        $scope.value=calculateXXX($scope.name);
       }
       function calculateXXX(sString:string):number
       {
        let nStartValue=0;
        for (let index = 0; index < sString.length; index++) {
            nStartValue+=sString.charCodeAt(index);
            
        }
        return nStartValue;
       } 
    });
       
})();