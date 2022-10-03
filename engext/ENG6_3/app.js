var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {/*http://www.testomanie.cz/anglictina_testy/testing/test4.htm*/
        name: "Slovní zásoba - porozumění textu",
        source:"www.testomanie.cz/",
        fields: [
            {   id:"1",
                question: "Which of these is cold?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "steam"},
                    {id: "2", name: "ice"},
		    {id: "3", name: "fire"},
                    {id: "4", name: "flame"},
                    {id: "5", name: "heat"}  
                ],
                data: ""
            },{   id:"2",
                question: "Which of these is not a part of a car?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "a driver"},
                    {id: "2", name: "headlamps"},
		    {id: "3", name: "a boot"},
                    {id: "4", name: "a wheel"},
                    {id: "5", name: "a tyre"} 
                ],
                data: ""
            }, {   id:"3",
                question: "Which of these you do not use to make a cake? ",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "iron"},
                    {id: "2", name: "currants"},
		    {id: "3", name: "sugar"},
                    {id: "4", name: "flour"},
                    {id: "5", name: "margarine"}
   
                ],
                data: ""
            }, {   id:"4",
                question: "Which of these can you read?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "a bookshelf"},
                    {id: "2", name: "a picture"},
		    {id: "3", name: "a dictionary"},
                    {id: "4", name: "a library"},
                    {id: "5", name: "a film"}
                ],
                data: ""
            }, {   id:"5",
                question: "Which of these is wrong? ",
                rightAnswer: "5",
                options: [
                    {id: "1", name: "the back of a chair"},
                    {id: "2", name: "the back of your hand"},
		    {id: "3", name: "the back of a knife"},
                    {id: "4", name: "the back of a book"},
		    {id: "5", name: "the back of a penny"}
                ],
                data: ""
            }, {   id:"6",
                question: "Which word means the same as afraid?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "feared"},
                    {id: "2", name: "fearless"},
		    {id: "3", name: "fearful"},
                    {id: "4", name: "fear"},
                    {id: "5", name: "to fear"}
                ],
                data: ""
            }, {   id:"7",
                question: "The opposite of rough is ",
                rightAnswer: "5",
                options: [
                    {id: "1", name: "silky"},
                    {id: "2", name: "sharp"},
		    {id: "3", name: "shiny"},
                    {id: "4", name: "hard"},
                    {id: "5", name: "smooth"}
                ],
                data: ""
            }, {   id:"8",
                question: "One child, but two ",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "childs'"},
                    {id: "2", name: "child"},
		    {id: "3", name: "child's"},
                    {id: "4", name: "children"},
                    {id: "5", name: "childer"}
                ],
                data: ""
            }, {   id:"9",
                question: "Which is wrong?",
                rightAnswer: "5",
                options: [
                    {id: "1", name: "the contents of a box"},
                    {id: "2", name: "the contents of a pocket"},
		    {id: "3", name: "the contents of a book"},
                    {id: "4", name: "the contents of a bottle"},
                    {id: "5", name: "the contents of a shelf"}
                ],
                data: ""
            }, {   id:"10",
                question: "Which is wrong? ",
                rightAnswer: "5",
                options: [
                    {id: "1", name: "The postman brought a letter"},
                    {id: "2", name: "The postman left a letter."},
		    {id: "3", name: "The postman carried a letter"},
                    {id: "4", name: "The postman delivered a letter."},
                    {id: "5", name: "The postman losed a letter"} 
                ],
                data: ""
            }, {   id:"11",
                question: "Which word means by yourself? ",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "lonely"},
                    {id: "2", name: "along"},
		    {id: "3", name: "alone"},
                    {id: "4", name: "almost"},
                    {id: "5", name: "just"}  
                ],
                data: ""
            } 
             , {   id:"12",
                question: "The opposite of broad is",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "narrow"},
                    {id: "2", name: "fat"},
		    {id: "3", name: "thin"},
                    {id: "4", name: "slim"},
                    {id: "5", name: "wide"}   

                ],
                data: ""
            }  , {   id:"13",
                question: "What does a dentist do to a bad tooth? ",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "take it out"},
                    {id: "2", name: "take it over"},
		    {id: "3", name: "take it in"},
                    {id: "4", name: "take it away"},
                    {id: "5", name: "take it off"}   

                ],
                data: ""
            }, {   id:"14",
                question: "Which is wrong?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "He cannot see a rose bush anywhere in the garden."},
                    {id: "2", name: "I don't anywhere want to meet her."},
		    {id: "3", name: "Put your bag down anywhere."},
                    {id: "4", name: "Anywhere you go, you need money."},
                    {id: "5", name: "I cannot find my jacket anywhere."}   

                ],
                data: ""
            } , {   id:"15",
                question: "Which word does not go with all the others?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "to pay"},
                    {id: "2", name: "to snake"},
		    {id: "3", name: "to spend"},
                    {id: "4", name: "money"},
                    {id: "5", name: "to buy"}   

                ],
                data: ""
            } , {   id:"16",
                question: "Seaside, swimsuit and paddle all have something to go with ",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "a holidays"},
                    {id: "2", name: "winter"},
		    {id: "3", name: "a hobby"},
                    {id: "4", name: "the countryside"},
                    {id: "5", name: "a job"}   

                ],
                data: ""
            } , {   id:"17",
                question: "Where can you see a zebra crossing? ",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "in a zoo"},
                    {id: "2", name: "in the street"},
		    {id: "3", name: "in a field"},
                    {id: "4", name: "on the beach"},
                    {id: "5", name: "in a museum"}   

                ],
                data: ""                
                        
        } , {   id:"18",
                question: "Which word does not go with all the others?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "a library"},
                    {id: "2", name: "to smell"},
		    {id: "3", name: "to read"},
                    {id: "4", name: "a book"},
                    {id: "5", name: "a title"}   

                ],
                data: ""                
                        
        }, {   id:"19",
                question: "What do you put on a pedal?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "your nose"},
                    {id: "2", name: "your leg"},
		    {id: "3", name: "your foot"},
                    {id: "4", name: "your hand"},
                    {id: "5", name: "your head"}   

                ],
                data: ""                
                        
        },{   id:"20",
                question: "Which of these does not go with all the others?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "to switch on"},
                    {id: "2", name: "a shadow"},
		    {id: "3", name: "a book"},
                    {id: "4", name: "electricity"},
                    {id: "5", name: "a light"}   

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
