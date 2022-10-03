var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {
        name: "Topic: Adjectives and Adverbs Level: Beginner Instructions: Which sentence is correct?",
        source:"usingenglish.com",
        fields: [
            {
                question: "Never",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "I never go there."},
                    {id: "2", name: "I go never there."},
					{id: "3", name: "Never I go there."}
                ],
                data: ""
            },
			{
                question: "Usually",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "I usually get up at six-thirty."},
                    {id: "2", name: "I get usually up at six-thirty."}
                ],
                data: ""
            },{
                question: "Often",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "I often go there."},
                    {id: "2", name: "I go there often."},
					{id: "3", name: "Both"}
                ],
                data: ""
            },{
                question: "Generally",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "Generally I don't read a newspaper."},
                    {id: "2", name: "I don't read a newspaper generally."},
					{id: "3", name: "Both"}
                ],
                data: ""
            },{
                question: "Rarely",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "Rarely I go there."},
                    {id: "2", name: "I go there rarely."},
					{id: "3", name: "Both"}
                ],
                data: ""
            },{
                question: "Soon",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "I'll do it soon."},
                    {id: "2", name: "I'll do soon it."},
					{id: "3", name: "Both"}
                ],
                data: ""
            },{
                question: "Frequently",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "I am frequently late for work."},
                    {id: "2", name: "I frequently am late for work."},
					{id: "3", name: "Both"}
                ],
                data: ""
            },{
                question: "Always",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "I am on always time."},
                    {id: "2", name: "I am always on time."},
					{id: "3", name: "Both"}
                ],
                data: ""
            },{
                question: "Yet",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "I haven't finished yet it."},
                    {id: "2", name: "I haven't finished it yet."},
					{id: "3", name: "Both"}
                ],
                data: ""
            },{
                question: "Now",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "I want now it."},
                    {id: "2", name: "I want it now."},
					{id: "3", name: "Both"}
                ],
                data: ""
            },{
                question: "Tomorrow",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "Tomorrow I'll go there."},
                    {id: "2", name: "I'll go there tomorrow."},
					{id: "3", name: "Both"}
                ],
                data: ""
            },{
                question: "Yesterday",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "I yesterday went there."},
                    {id: "2", name: "I went there yesterday."},
					{id: "3", name: "Both"}
                ],
                data: ""
            },{
                question: "Today",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "She arrives today."},
                    {id: "2", name: "She today arrives."},
					{id: "3", name: "Both"}
                ],
                data: ""
            },{
                question: "Yet",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "I haven't done it yet."},
                    {id: "2", name: "I haven't yet done it."},
					{id: "3", name: "Both"}
                ],
                data: ""
            },{
                question: "Still",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "I still haven't finished."},
                    {id: "2", name: "I haven't finished still."},
					{id: "3", name: "Both"}
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
