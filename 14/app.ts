declare var angular: any;

(function(){
    'use strict';
    

    angular.module('CounterApp14',[])
    .controller('CounterController14',Controller);
    

   
    Controller.$inject=['$scope'];
    //$scope.name=""; tady nelze
    function Controller($scope){
        // me: inicializace scope properties
        $scope.onceCounter=0;
        $scope.counter=0;
        $scope.name="Yakkov";
        $scope.showNumberOfWatchers=function(){

            //console.log($scope);
            console.log("pocet sledovacu:",$scope.$$watchersCount);
        }
        $scope.countOnce = function (){
            $scope.onceCounter=1;
        }
        $scope.upCounter=function ()
        {
            $scope.counter++;
            $scope.name="Pavla";
        }
        // sledovani digest loops
        $scope.$watch(function () {
            console.log("Digest loop fired!");
            
        })
        //$scope.name="jiri"; probehne jakoby "jednou" inicializace je jedna, nesmyslne delat matouci
        /*
        // manually setting up watcher
        $scope.$watch('onceCounter', function (newValue,oldValue){
            console.log("stara hodnota onceCounter:", oldValue);
            console.log("nova hodnota once Counter:", newValue);
        })
        // manually setting up watcher
        $scope.$watch('counter', function (newValue,oldValue){
            console.log("stara hodnota counteru:", oldValue);
            console.log("nova hodnota counteru:", newValue);
        })
        */
        
    
      
       
    };
       
})();