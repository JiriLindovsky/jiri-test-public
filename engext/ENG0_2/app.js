var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {
        name: "Elementární kvíz few or little ENG0_2",/*http://www.usingenglish.com/members/quizzes/223.html*/
        fields: [
            {
                question: "There were only a ...... people at the party",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "few"},
                    {id: "2", name: "little"}
                  
                ],
                data: ""
            }, 
             {
                question: " I wish I could lend you some money, but I'm afraid I've got very ...... left.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "few"},
                    {id: "2", name: "little"}
                  
                ],
                data: ""
            },
             {
                question: "They have scored ......... goals than their rivals.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "less"},
                    {id: "2", name: "fewer"}
                  
                ],
                data: ""
            },{
                question: "I managed to find his house with ....... difficulty",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "little"},
                    {id: "2", name: "few"}
                  
                ],
                data: ""
            },{
                question: "There's very ....... coffee in the jar; could you buy some?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "few"},
                    {id: "2", name: "little"}
                  
                ],
                data: ""
            },{
                question: "I speak ...... German",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "few"},
                    {id: "2", name: "little"}
                  
                ],
                data: ""
            },{
                question: "She had far ....... problems than she was expecting",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "fewer"},
                    {id: "2", name: "less"}
                  
                ],
                data: ""
            },{
                question: "The company has ..... employees than it did five years ago",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "less"},
                    {id: "2", name: "fewer"}
                  
                ],
                data: ""
            },{
                question: "It takes ...... time than you think to do the crossword puzzle",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "fewer"},
                    {id: "2", name: "less"}
                  
                ],
                data: ""
            },{
                question: "...... people have fallen ill than predicted",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "less"},
                    {id: "2", name: "fewer"}
                  
                ],
                data: ""
            },{
                question: "There were ..... cars on the road when I was a child",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "fewer"},
                    {id: "2", name: "less"}
                  
                ],
                data: ""
            },{
                question: "I find it more or ..... impossible to get through to her at work",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "fewer"},
                    {id: "2", name: "less"}
                  
                ],
                data: ""
            },{
                question: "There was surprisingly ........ noise from my neighbour's party last night",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "little"},
                    {id: "2", name: "few"}
                  
                ],
                data: ""
            },{
                question: "If they don't understand, give them a ...... examples",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "little"},
                    {id: "2", name: "few"}
                  
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
