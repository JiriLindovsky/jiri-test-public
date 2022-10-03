var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {
        name: "Quiz",
        fields: [
            {
                question: "Kdo založil firmu Apple?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "Bill Gates"},
                    {id: "2", name: "Steve Jobs"},
                    {id: "3", name: "Steve Balmer"}
                ],
                data: ""
            },
            {
                question: "Kdo založil firmu Microsoft?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "Bill Gates"},
                    {id: "2", name: "Steve Jobs"},
                    {id: "3", name: "Steve Balmer"}
                    
                ],
                data: ""
            }
            ,
            {
                question: "Která barva se nevyskytuje na vlajce České republiky?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "černá"},
                    {id: "2", name: "modrá"},
                    {id: "3", name: "bílá"},
                    {id: "4", name: "červená"}

                ],
                data: ""
            },
             {
                question: "Které z těchto anglických slov znamená květina?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "flour"},
                    {id: "2", name: "flover"},
                    {id: "3", name: "flower"},
                    {id: "4", name: "fuller"}

                ],
                data: ""
            },
                         {
                question: "Silikagel je:",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "náplň implantátů"},
                    {id: "2", name: "pórovitý křemičitan sodný"},
                    {id: "3", name: "silikonové mazadlo užívané v kosmu"},
                    {id: "4", name: "v kosmetice náhražka lanolinu"}

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
