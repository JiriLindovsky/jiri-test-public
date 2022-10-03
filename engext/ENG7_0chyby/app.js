var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {/*http://www.kvizy.eu/trening-frazove-slovesa*/
        name: "Slovní zásoba - porozumění textu",
        source:"www.kvizy.eu",
        fields: [
            {   id:"1",
                question: "Wake up:",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "vstát"},
                    {id: "2", name: "promyslet"},
		    {id: "3", name: "probudit se"},
                    {id: "4", name: "narodit se"},
                   
                ],
                data: ""
            },{   id:"2",
                question: "Run out:",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "vyčerpat"},
                    {id: "2", name: "proběhnout"},
		    {id: "3", name: "doběhnout"},
                    {id: "4", name: "běhat"} 
                ],
                data: ""
            }, {   id:"3",
                question: "Break up: ",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "prorazit"},
                    {id: "2", name: "probudit se"},
		    {id: "3", name: "ukončit"},
                    {id: "4", name: "oddechnout si"}
   
                ],
                data: ""
            }, {   id:"4",
                question: "Cut away: ",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "odřezat"},
                    {id: "2", name: "zmenšit"},
		    {id: "3", name: "vyrýt"},
                    {id: "4", name: "odejít"}
                ],
                data: ""
            }, {   id:"5",
                question: "Face out:",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "postavit se proti něčemu (směle)"},
                    {id: "2", name: "zatvářit se"},
		    {id: "3", name: "zamračit se"},
                    {id: "4", name: "skrýt výraz tváře"}
                ],
                data: ""
            }, {   id:"6",
                question: "Touch down: ",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "přistát, dotknout se země (let.)"},
                    {id: "2", name: "dotknout se"},/*upraveno*/
		    {id: "3", name: "spadnout"},
                    {id: "4", name: "položit do"}/*????*/
                ],
                data: ""
            }, {   id:"7",
                question: "Let down:",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "zklamat"},
                    {id: "2", name: "hodit za hlavu"},
		    {id: "3", name: "propustit"},
                    {id: "4", name: "shodit"}
                ],
                data: ""
            }, {   id:"8",
                question: "Run away:",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "kandidovat"},/*???*/
                    {id: "2", name: "utéct"},
		    {id: "3", name: "překypět"},
                    {id: "4", name: "dohnat koho"}
                ],
                data: ""
            }, {   id:"9",
                question: "",
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
