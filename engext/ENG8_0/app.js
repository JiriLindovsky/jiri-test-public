var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {/*http://www.testomanie.cz/anglictina_testy/testing/test11.htm*/
        name: "Slovní zásoba - porozumění textu",
        source:"www.testomanie.cz/",
        fields: [
            {   id:"1",
                question: "If you don't have a good dictionary, you ______ be able to learn English well.",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "will"},
                    {id: "2", name: "mustn't"},
		    {id: "3", name: "must"},
                    {id: "4", name: "won't"} 
                ],
                data: ""
            },{   id:"2",
                question: "Have you ever ________ to Australia?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "go"},
                    {id: "2", name: "went"},
		    {id: "3", name: "been"},
                    {id: "4", name: "gone"}
                ],
                data: ""
            }, {   id:"3",
                question: "The doctor suggested ___________ .",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "that she will not smoke"},
                    {id: "2", name: "that she not smoke"},
		    {id: "3", name: "that she couldn't smoke"}
   
                ],
                data: ""
            }, {   id:"4",
                question: "Bob threw away the apples _____.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "which were rotten"},
                    {id: "2", name: "were rotten"},
		    {id: "3", name: "which was rotten"}
                ],
                data: ""
            }, {   id:"5",
                question: "The streets are wet; __________.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "it had to rain last night"},
                    {id: "2", name: "it must have rained last night"},
		    {id: "3", name: "it must be raining last night"}
                ],
                data: ""
            }, {   id:"6",
                question: "When I was young, I_____get up at six every morning.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "had to"},
                    {id: "2", name: "should"},
		    {id: "3", name: "must"}
                ],
                data: ""
            }, {   id:"7",
                question: "She_____mastered calculus, but she_____Arabic.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "never, did"},
                    {id: "2", name: "has, didn't"},
		    {id: "3", name: "not, learns"}
                ],
                data: ""
            }, {   id:"8",
                question: "Excuse me, could you _________ me the way to the bank?",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "say to"},
                    {id: "2", name: "talk"},
		    {id: "3", name: "say"},
                    {id: "4", name: "tell"}
                ],
                data: ""
            }, {   id:"9",
                question: "What ___________ to do this weekend?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "are you going"},
                    {id: "2", name: "will you"},
		    {id: "3", name: "are you"},
                    {id: "4", name: "must you"}
                ],
                data: ""
            }, {   id:"10",
                question: "________ French at a young age, it was easier for me to learn Spanish later.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "Learning"},
                    {id: "2", name: "To learn"},
		    {id: "3", name: "Learned"}
                ],
                data: ""
            }, {   id:"11",
                question: "________ you like some more cake?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "Do"},
                    {id: "2", name: "Would"},
		    {id: "3", name: "Are"},
                    {id: "4", name: "Will"}  
                ],
                data: ""
            } 
             , {   id:"12",
                question: "The USA is ____________ England.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "bigger"},
                    {id: "2", name: "bigger than"},
		    {id: "3", name: "big enough"},
                    {id: "4", name: "the biggest"}

                ],
                data: ""
            }  , {   id:"13",
                question: "They fell in love while they __________ in England.",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "was studying"},
                    {id: "2", name: "are studying"},
		    {id: "3", name: "have been studying"},
                    {id: "4", name: "were studying"} 

                ],
                data: ""
            }, {   id:"14",
                question: "Did you __________ the film on TV last night?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "see"},
                    {id: "2", name: "saw"},
		    {id: "3", name: "seen"},
                    {id: "4", name: "watched"}  

                ],
                data: ""
            } , {   id:"15",
                question: "English people _______ tea every day.",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "are drinking"},
                    {id: "2", name: "drinks"},
		    {id: "3", name: "drinking"},
                    {id: "4", name: "drink"}  

                ],
                data: ""
            } , {   id:"16",
                question: "I've been learning English ______ I was twelve years old.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "for"},
                    {id: "2", name: "since"},
		    {id: "3", name: "before"},
                    {id: "4", name: "until"}  

                ],
                data: ""
            } , {   id:"17",
                question: "Mrs. Smith was upset with her daughter, Sue. Sue ____________ .",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "should not have told a lie"},
                    {id: "2", name: "must no have told a lie"},
		    {id: "3", name: "didn't tell a lie"}
                ],
                data: ""                
                        
        } , {   id:"18",
                question: "Classes will be cancelled tomorrow ____________ .",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "because it a national holiday"},
                    {id: "2", name: "because of a national holiday"},
		    {id: "3", name: "because a national holiday"}

                ],
                data: ""                
                        
        }, {   id:"19",
                question: "I don't know __________ .",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "to used the vertical file in the library"},
                    {id: "2", name: "how to use the vertical file in the library"},
		    {id: "3", name: "to use the vertical file in the library"}
                     

                ],
                data: ""                
                        
        },{   id:"20",
                question: "The Raptors would have won if they_____ a day off.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "had had"},
                    {id: "2", name: "have been given"},
		    {id: "3", name: "have had"}  

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
