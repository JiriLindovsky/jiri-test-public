var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {
        name: "Kvíz much/many",/*http://www.usingenglish.com/members/quizzes/15.html",*/
        fields: [
            {
                question: "I don't have ____ free time.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "much"},
                    {id: "2", name: "many"}
                ],
                data: ""
            },{
                question: " I haven't met her ___ times.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "much"},
                    {id: "2", name: "many"}
                ],
                data: ""
            },{
                question: "Was there ___ trouble yesterday?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "much"},
                    {id: "2", name: "many"}
                ],
                data: ""
            },{
                question: "She doesn't have _____ problems with her clients.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "much"},
                    {id: "2", name: "many"}
                ],
                data: ""
            },{
                question: "How ____ did they cost?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "much"},
                    {id: "2", name: "many"}
                ],
                data: ""
            },{
                question: "How ____ police were at the scene?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "much"},
                    {id: "2", name: "many"}
                ],
                data: ""
            },{
                question: "How ____ police officers were at the scene?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "much"},
                    {id: "2", name: "many"}
                ],
                data: ""
            },{
                question: "I didn't have ____ time to think.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "much"},
                    {id: "2", name: "many"}
                ],
                data: ""
            },{
                question: "Not ____ people are that brave.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "much"},
                    {id: "2", name: "many"}
                ],
                data: ""
            },{
                question: "There wasn't ____ we could do to help.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "much"},
                    {id: "2", name: "many"}
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
