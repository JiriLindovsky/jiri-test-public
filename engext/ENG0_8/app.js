var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {
        name: "Topic: Adjectives and Adverbs,Level: Beginner, Instructions: Choose the correct answer.",
        source:"usingenglish.com",
        fields: [
            {
                question: "I was tired, ___ I managed to finish it.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "already"},
                    {id: "2", name: "yet"}
                ],
                data: ""
            },{
                question: "Have you ____ finished?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "already"},
                    {id: "2", name: "yet"}
                ],
                data: ""
            },{
                question: "As ___, I haven't has time to call her.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "already"},
                    {id: "2", name: "yet"}
                ],
                data: ""
            },{
                question: "He has ____ to start the project.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "already"},
                    {id: "2", name: "yet"}
                ],
                data: ""
            },{
                question: "Have they arrived ___?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "already"},
                    {id: "2", name: "yet"}
                ],
                data: ""
            },{
                question: "Have they ____ finished?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "already"},
                    {id: "2", name: "yet"}
                ],
                data: ""
            },{
                question: "I was shocked that they had ____ done it.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "already"},
                    {id: "2", name: "yet"}
                ],
                data: ""
            },{
                question: " I was surprised that they had ___ to decide what to do.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "already"},
                    {id: "2", name: "yet"}
                ],
                data: ""
            },{
                question: "She has ___ to arrive.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "already"},
                    {id: "2", name: "yet"}
                ],
                data: ""
            },{
                question: "He has ___ arrived.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "already"},
                    {id: "2", name: "yet"}
                ],
                data: ""
            },{
                question: "I had ____ had enough.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "already"},
                    {id: "2", name: "yet"}
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
