var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {
        name: "Articles",
        source:"http://www.roadtogrammar.com/",
        fields: [
            {   id:"1",
                question: "I have _____ headache. I think I'd better rest.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "the"},
                    {id: "2", name: "a"},
		    {id: "3", name: "an"}
                ],
                data: ""
            },{   id:"2",
                question: "_____ President of the United States is Barack Obama.",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "An"},
                    {id: "2", name: "A"},
		    {id: "3", name: "The"}
                ],
                data: ""
            }, {   id:"3",
                question: "I found _____ dollar lying by the side of the road.",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "an"},
                    {id: "2", name: "the"},
		    {id: "3", name: "a"}
                ],
                data: ""
            }, {   id:"4",
                question: "I found a dollar lying by the side of _____ road.",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "an"},
                    {id: "2", name: "a"},
		    {id: "3", name: "the"}
                ],
                data: ""
            }, {   id:"5",
                question: "I can't wait until _____ weekend comes.",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "an"},
                    {id: "2", name: "a"},
		    {id: "3", name: "the"}
                ],
                data: ""
            }, {   id:"6",
                question: "_____ postman always comes before nine o' clock.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "The"},
                    {id: "2", name: "An"},
		    {id: "3", name: "A"}
                ],
                data: ""
            }, {   id:"7",
                question: "This tie is really _____ awful color.",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "a"},
                    {id: "2", name: "the"},
		    {id: "3", name: "an"}
                ],
                data: ""
            }, {   id:"8",
                question: "I had _____ haircut yesterday.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "the"},
                    {id: "2", name: "a"},
		    {id: "3", name: "an"}
                ],
                data: ""
            }, {   id:"9",
                question: "Every time I return home, _____ neighbor's dog barks at me.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "a"},
                    {id: "2", name: "the"},
		    {id: "3", name: "an"}
                ],
                data: ""
            }, {   id:"10",
                question: "_____ apple a day keeps the doctor away.",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "A"},
                    {id: "2", name: "The"},
		    {id: "3", name: "An"}
                ],
                data: ""
            }, {   id:"11",
                question: "I bought an apple and an orange. I ate _____ orange.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "a"},
                    {id: "2", name: "the"},
		    {id: "3", name: "an"}
                ],
                data: ""
            }, {   id:"12",
                question: "I have a car and a bicycle, but I prefer to use _____ car.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "a"},
                    {id: "2", name: "the"},
		    {id: "3", name: "an"}
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
