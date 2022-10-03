var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {
        name: "Kvíz na elementární úrovni Angličtiny - Early&Soon ENG0_1:",/*http://www.usingenglish.com/members/quizzes/371.html*/
        fields: [
            {
                question: "I hate getting up ____.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "early"},
					{id: "2", name: "soon"}
                    
                ],
                data: ""
            },
			{
                question: "Ciao - see you ____.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "early"},
					{id: "2", name: "soon"}
                    
                ],
                data: ""
            },
			{
                question: "Come on, let's wait a bit longer- I'm sure he'll be here ____.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "early"},
					{id: "2", name: "soon"}
                    
                ],
                data: ""
            },
			{
                question: "I arrived a bit ____ so I had a coffee while I waited.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "early"},
					{id: "2", name: "soon"}
                    
                ],
                data: ""
            },
            {
                question: "Could you do it as ____ as possible- I'm in a real hurry.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "early"},
					{id: "2", name: "soon"}
                    
                ],
                data: ""
            },
			{
                question: "She's in her ____ sixties.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "early"},
					{id: "2", name: "soon"}
                    
                ],
                data: ""
            },
			{
                question: "It happened in the ____ 1990s.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "early"},
					{id: "2", name: "soon"}
                    
                ],
                data: ""
            },
			{
                question: "I'm not going out tonight because I want an ____ night.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "early"},
					{id: "2", name: "soon"}
                    
                ],
                data: ""
            },
			{
                question: "It's cloudy- I think it's going to rain ____.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "early"},
					{id: "2", name: "soon"}
                    
                ],
                data: ""
            },
			{
                question: "Tell her I'm sorry she's ill and to get well ____.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "early"},
					{id: "2", name: "soon"}
                    
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
