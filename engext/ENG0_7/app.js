var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {
        name: "Topic: Adjectives and Adverbs,Level: Beginner,Instructions: Choose the correct answer.",
        source:"usingenglish.com",
        fields: [
            {
                question: "I go there ____.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "every day"},
                    {id: "2", name: "every days"},
					{id: "3", name: "everyday"},
					{id: "4", name: "everydays"}
                ],
                data: ""
            },
			{
                question: "There's a bus ____ quarter of an hour.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "every"},
                    {id: "2", name: "all"},
                    {id: "3", name: "all of"}
                ],
                data: ""
            },{
                question: "\"All\" can be used as a pronoun.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "True"},
                    {id: "2", name: "False"}
                ],
                data: ""
            },{
                question: "\"Every\" can be used as a pronoun.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "True"},
                    {id: "2", name: "False"}
                ],
                data: ""
            },{
                question: "Yesterday, it rained ____ day.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "all"},
                    {id: "2", name: "every"}
                ],
                data: ""
            },{
                question: "We had ____ sorts of problems doing it.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "all"},
                    {id: "2", name: "every"}
                ],
                data: ""
            },{
                question: "I tried ____ single thing I could think of, but it still didn't work.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "all"},
                    {id: "2", name: "every"}
                ],
                data: ""
            },{
                question: "I've read ____ her books.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "all"},
                    {id: "2", name: "every"}
                ],
                data: ""
            },{
                question: "I've seen ____ film he's made.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "all"},
                    {id: "2", name: "every"}
                ],
                data: ""
            },{
                question: "It took me ____ day to finish.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "all"},
                    {id: "2", name: "every"}
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
