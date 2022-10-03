var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {
        name: "Kvíz - počitatelná a nepočitatelná podstatná jména",
        source:"Lucie Poslušná: Nejčastější chyby v angličtině - Cpress 2009",
        fields: [
            {
                question: "Nemám dostatek informací.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "I don't have enough informations."},
                    {id: "2", name: "I don't have enough information"}
                ],
                data: ""
            },
            {
                question: "Dal bych si toast.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "I'd like a toast."},
                    {id: "2", name: "I'd like some toast."}
                ],
                data: ""
            }
            ,
            {
                question: "Rozhodněte , zda je následující podstatné jméno počitatelné nebo ne: toast",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "ano"},
                    {id: "2", name: "ne"}
                ],
                data: ""
            }
             ,
            {
                question: "Rozhodněte , zda je následující podstatné jméno počitatelné nebo ne: chair",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "ano"},
                    {id: "2", name: "ne"}
                ],
                data: ""
            }
 ,
            {
                question: "Rozhodněte , zda je následující podstatné jméno počitatelné nebo ne: banana",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "ano"},
                    {id: "2", name: "ne"}
                ],
                data: ""
            }
 ,
            {
                question: "Rozhodněte , zda je následující podstatné jméno počitatelné nebo ne: ham",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "ano"},
                    {id: "2", name: "ne"}
                ],
                data: ""
            }
 ,
            {
                question: "Rozhodněte , zda je následující podstatné jméno počitatelné nebo ne: tea",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "ano"},
                    {id: "2", name: "ne"}
                ],
                data: ""
            }
             ,
            {
                question: "Rozhodněte , zda je následující podstatné jméno počitatelné nebo ne: money",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "ano"},
                    {id: "2", name: "ne"}
                ],
                data: ""
            }

 ,
            {
                question: "Rozhodněte , zda je následující podstatné jméno počitatelné nebo ne: house",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "ano"},
                    {id: "2", name: "ne"}
                ],
                data: ""
            }
 ,
            {
                question: "Rozhodněte , zda je následující podstatné jméno počitatelné nebo ne: idea",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "ano"},
                    {id: "2", name: "ne"}
                ],
                data: ""
            }
 ,
            {
                question: "Rozhodněte , zda je následující podstatné jméno počitatelné nebo ne: rain",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "ano"},
                    {id: "2", name: "ne"}
                ],
                data: ""
            }
 ,
            {
                question: "Rozhodněte , zda je následující podstatné jméno počitatelné nebo ne: man",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "ano"},
                    {id: "2", name: "ne"}
                ],
                data: ""
            }

                        
              
        ]
    };
    $scope.showAsRightAnswer = function (field, option) {
        return $scope.entity.showResults && option.id === field.rightAnswer;
    };

    $scope.getStyle = function (field, option) {
        return (field.data === field.rightAnswer) ? {color: "green"} : {color: "red"};
    };

    $scope.submitForm = function () {
        $scope.entity.showResults = true;
    }
    $scope.getPocetKvizu= function () {return $scope.entity.fields.length;}
    $scope.n=$scope.getPocetKvizu();
    $scope.getPocetSpravnych= function () {

       var r = 0;
       var field1;
       for (var i=0 ; i< $scope.getPocetKvizu();i++)
                                      {if ($scope.entity.fields[i].rightAnswer===$scope.entity.fields[i].data) 
                                          {r++; } 
                                      }
                                     
                                      return r;
   }
   $scope.m=$scope.getPocetSpravnych();
   $scope.getProcenta= function (){return parseInt($scope.getPocetSpravnych())/parseInt($scope.getPocetKvizu())*100+"%"}   

});
