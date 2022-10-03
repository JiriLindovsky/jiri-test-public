var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {
        name: "Topic: Conditionals, Level: Intermediate, Instructions: Choose the correct answer.",
        source:"usingenglish.com",
        fields: [
            {
                question: "If you'd asked her, she could've gone with us.",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "She will go."},
                    {id: "2", name: "She might go."},
					{id: "3", name: "She didn't go."}
                ],
                data: ""
            },{
                question: "If I'd had the opportunity, I would have done a degree.",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "I have the opportunity."},
                    {id: "2", name: "I don't have the opportunity."},
					{id: "3", name: "I had the opportunity."},
					{id: "4", name: "I didn't have the opportunity."}
                ],
                data: ""
            },{
                question: "If I had her phone number, I'd ring her.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "I have her number."},
                    {id: "2", name: "I don't have her number."},
					{id: "3", name: "I had her number."},
					{id: "4", name: "I didn't have her number."}
                ],
                data: ""
            },{
                question: "If I watch this show, I'll be bored.",
                rightAnswer: "3",
                options: [
                   {id: "1", name: "I have watched it."},
                    {id: "2", name: "I want to watch it."},
					{id: "3", name: "I don't want to watch it."},
					{id: "4", name: "I didn't watch it."}
                ],
                data: ""
            },{
                question: "If I'd sold it you, I'd be rich now.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "I sold it."},
                    {id: "2", name: "I didn't sell it."}
                ],
                data: ""
            },{
                question: "If they'd eaten their dinner, they wouldn't be hungry.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "They are hungry."},
                    {id: "2", name: "They aren't hungry."}
                ],
                data: ""
            },{
                question: "If I'd married Katie, we would have been happy.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "I married Katie."},
                    {id: "2", name: "I didn't marry Katie."},
					{id: "3", name: "I might marry Katie."}
                ],
                data: ""
            },{
                question: "If I bought an MP3 Player, I could get rid of my CDs.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "I will buy an MP3."},
                    {id: "2", name: "I might buy an MP3."},
					{id: "3", name: "I have bought an MP3."}
                ],
                data: ""
            },{
                question: "If I moved to Australia, I could get a better job.",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "I will move to Australia."},
                    {id: "2", name: "I have moved to Australia."},
					{id: "3", name: "I am going to move to Australia."},
					{id: "4", name: "I might move to Australia."}
                ],
                data: ""
            },{
                question: "If the computer crashes, you'll lose any unsaved work.",
                rightAnswer: "3",
                options: [
                  {id: "1", name: "The computer has crashed."},
                    {id: "2", name: "The computer will crash."},
					{id: "3", name: "The computer could crash."}
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
