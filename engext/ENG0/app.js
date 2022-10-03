var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {
        name: "Kvíz na elementární úrovni Angličtiny - Choose the correct answer:",/*http://www.englishexercises.org/makeagame/viewgame.asp?id=9158*/
        fields: [
            {
                question: "\"Margaret speaks English and French. What language ___________ ?\"",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "you speak"},
                    {id: "2", name: "speak you"},
                    {id: "3", name: "do you speak"},
                    {id: "4", name: "does you speak"}
                ],
                data: ""
            },
            {
                question: "Mark is vegetarian. He ___________meat.",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "never eat"},
                    {id: "2", name: "don't eat"},
                    {id: "3", name: "didn't eat"},
                    {id: "4", name: "doesn't eat"}
                ],
                data: ""
            },{
                question: "\" _______is my sister Helen.\" \"How do you do?\"",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "that"},
                    {id: "2", name: "this"},
                    {id: "3", name: "there"},
                    {id: "4", name: "these"}
                ],
                data: ""
            },{
                question: "This is a secret. You _______ tell anybody.",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "must"},
                    {id: "2", name: "have to"},
                    {id: "3", name: "mustn't"},
                    {id: "4", name: "needn't"}
                ],
                data: ""
            },{
                question: "If I ___________well tomorrow, I'll stay at home.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "won't feel"},
                    {id: "2", name: "don't feel"},
                    {id: "3", name: "feel"},
                    {id: "4", name: "will feel"}
                ],
                data: ""
            },{
                question: "When he was young he _____________ very fast.",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "can run"},
                    {id: "2", name: "might run"},
                    {id: "3", name: "could run"},
                    {id: "4", name: "could to run"}
                ],
                data: ""
            },{
                question: "Hurry up! The train leaves ______ five minutes.",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "about"},
                    {id: "2", name: "for"},
                    {id: "3", name: "at"},
                    {id: "4", name: "in"}
                ],
                data: ""
            },{
                question: "I've lost my key. I've looked ______ for it.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "everywhere"},
                    {id: "2", name: "everyone"},
                    {id: "3", name: "everything"},
                    {id: "4", name: "every day"}
                ],
                data: ""
            },{
                question: "My brother isn't interested ____languages. He is very good  _____ sports.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "with...in"},
                    {id: "2", name: "in...at"},
                    {id: "3", name: "at...in"},
                    {id: "4", name: "in...with"}
                ],
                data: ""
            },{
                question: "Can I have_______in my coffee, please?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "milk"},
                    {id: "2", name: "any milk"},
                    {id: "3", name: "some"},
                    {id: "4", name: "no milk"}
                ],
                data: ""
            },{
                question: "\" _______________well last night?\"",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "Do you sleep"},
                    {id: "2", name: "Did you sleep"},
                    {id: "3", name: "Were sleeping"},
                    {id: "4", name: "Have you slept"}
                ],
                data: ""
            },{
                question: "\" What ______________?\"  \"She works in a bank.\"",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "has she done"},
                    {id: "2", name: "does she do"},
                    {id: "3", name: "is she doing"},
                    {id: "4", name: "she does"}
                ],
                data: ""
            },{
                question: "Your English has improved. You speak _______ last year.",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "very fluently"},
                    {id: "2", name: "a lot fluently"},
                    {id: "3", name: "more fluently than"},
                    {id: "4", name: "much fluently"}
                ],
                data: ""
            },{
                question: "A: Someone broke into our house last night.        B: Oh, dear! ________________?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "Was anything taken?"},
                    {id: "2", name: "Was something taken?"},
                    {id: "3", name: "Did anything take?"},
                    {id: "4", name: "Did something take?"}
                ],
                data: ""
            },{
                question: "Can you read this for me? My eyes aren't ________________yours.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "better"},
                    {id: "2", name: "as good as"},
                    {id: "3", name: "as better as"},
                    {id: "4", name: "more good"}
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
