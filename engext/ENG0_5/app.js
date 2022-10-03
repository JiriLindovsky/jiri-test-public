var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {
        name: "Topic: Adjectives and Adverbs-Beginner-Instructions: Are these sentences correct?",
        source:"usingenglish.com",
        fields: [
            {
                question: "It's deadly serious.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "True"},
                    {id: "2", name: "False"}
                ],
                data: ""
            },    {
                question: "Feelings ran highly.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "True"},
                    {id: "2", name: "False"}
                ],
                data: ""
            },    {
                question: "They treated them roughly.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "True"},
                    {id: "2", name: "False"}
                ],
                data: ""
            },    {
                question: " I'm deadly sure.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "True"},
                    {id: "2", name: "False"}
                ],
                data: ""
            },    {
                question: "They're right behind us.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "True"},
                    {id: "2", name: "False"}
                ],
                data: ""
            },    {
                question: "The joke fell flatly.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "True"},
                    {id: "2", name: "False"}
                ],
                data: ""
            },    {
                question: "He's always lately for class.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "True"},
                    {id: "2", name: "False"}
                ],
                data: ""
            },    {
                question: "She arrived late for class.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "True"},
                    {id: "2", name: "False"}
                ],
                data: ""
            },    {
                question: "They work hardly.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "True"},
                    {id: "2", name: "False"}
                ],
                data: ""
            },    {
                question: "The answer is wrongly.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "True"},
                    {id: "2", name: "False"}
                ],
                data: ""
            },
            
                        
              
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
