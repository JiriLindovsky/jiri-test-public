var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {/*http://www.testomanie.cz/anglictina_testy/testing/test1.htm*/
        name: "Slovní zásoba - porozumění textu",
        source:"www.testomanie.cz/",
        fields: [
            {   id:"1",
                question: "What is the opposite of loud?",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "low"},
                    {id: "2", name: "noisy"},
		    {id: "3", name: "calm"},
                    {id: "4", name: "soft"},
                    {id: "5", name: "silent"}  
                ],
                data: ""
            },{   id:"2",
                question: "Which of the following sentences is wrong?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "Make me laugh."},
                    {id: "2", name: "Make the beds."},
		    {id: "3", name: "I am going to make my hair."},
                    {id: "4", name: "Make up your mind!"},
                    {id: "5", name: "Make some coffee."} 
                ],
                data: ""
            }, {   id:"3",
                question: "Which word does not go with all the others?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "flowers"},
                    {id: "2", name: "gardens"},
		    {id: "3", name: "small"},
                    {id: "4", name: "grass"},
                    {id: "5", name: "grass"}
   
                ],
                data: ""
            }, {   id:"4",
                question: "Which of these can you drink?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "ice"},
                    {id: "2", name: "paper"},
		    {id: "3", name: "lemonade"},
                    {id: "4", name: "petrol"},
                    {id: "5", name: "ink"}
                ],
                data: ""
            }, {   id:"5",
                question: "What is the opposite of happy?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "hard"},
                    {id: "2", name: "dark"},
		    {id: "3", name: "sad"},
                    {id: "4", name: "heavy"},
		    {id: "5", name: "glad"}
                ],
                data: ""
            }, {   id:"6",
                question: "Which is wrong?",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "I have shown you the way."},
                    {id: "2", name: "I shall show you the way."},
		    {id: "3", name: "I must show you the way."},
                    {id: "4", name: "I shown you the way."},
                    {id: "5", name: "I was showing you the way."}
                ],
                data: ""
            }, {   id:"7",
                question: "Which of these is not a season of the year?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "winter"},
                    {id: "2", name: "month"},
		    {id: "3", name: "summer"},
                    {id: "4", name: "spring"},
                    {id: "5", name: "autumn"}
                ],
                data: ""
            }, {   id:"8",
                question: "What is the opposite of more?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "few"},
                    {id: "2", name: "less"},
		    {id: "3", name: "many"},
                    {id: "4", name: "little"},
                    {id: "5", name: "a lot"}
                ],
                data: ""
            }, {   id:"9",
                question: "To wink means",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "to shut and open both eyes quickly"},
                    {id: "2", name: "to shut an eye"},
		    {id: "3", name: "to shut both eyes"},
                    {id: "4", name: "to shut and open an eye quickly"},
                    {id: "5", name: "to open an eye"}
                ],
                data: ""
            }, {   id:"10",
                question: "Which word does not go with the others?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "cloudy"},
                    {id: "2", name: "sunny"},
		    {id: "3", name: "funny"},
                    {id: "4", name: "stormy"},
                    {id: "5", name: "rainy"} 
                ],
                data: ""
            }, {   id:"11",
                question: "The opposite of alive is? ",
                rightAnswer: "5",
                options: [
                    {id: "1", name: "quiet"},
                    {id: "2", name: "blind"},
		    {id: "3", name: "asleep"},
                    {id: "4", name: "ill"},
                    {id: "5", name: "dead"}  
                ],
                data: ""
            } 
             , {   id:"12",
                question: "Which of the following words means honest?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "sure"},
                    {id: "2", name: "truthful"},
		    {id: "3", name: "untrue"},
                    {id: "4", name: "good"},
                    {id: "5", name: "nice"}   

                ],
                data: ""
            }  , {   id:"13",
                question: "Which werb means nearly the same as to want?",
                rightAnswer: "5",
                options: [
                    {id: "1", name: "to love"},
                    {id: "2", name: "to have"},
		    {id: "3", name: "to like"},
                    {id: "4", name: "to fail"},
                    {id: "5", name: "to need"}   

                ],
                data: ""
            }, {   id:"14",
                question: "What is the opposite of last?",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "finish"},
                    {id: "2", name: "start"},
		    {id: "3", name: "beginning"},
                    {id: "4", name: "first"},
                    {id: "5", name: "end"}   

                ],
                data: ""
            } , {   id:"15",
                question: "If you call a man Jim, his name is",
                rightAnswer: "5",
                options: [
                    {id: "1", name: "Tomas"},
                    {id: "2", name: "John"},
		    {id: "3", name: "Harold"},
                    {id: "4", name: "Jack"},
                    {id: "5", name: "James"}   

                ],
                data: ""
            } , {   id:"16",
                question: "What is the opposite of now?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "then"},
                    {id: "2", name: "always"},
		    {id: "3", name: "sometimes"},
                    {id: "4", name: "again"},
                    {id: "5", name: "soon"}   

                ],
                data: ""
            } , {   id:"17",
                question: "Where there is no counter to find?",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "in a bank"},
                    {id: "2", name: "in a library"},
		    {id: "3", name: "in a shop"},
                    {id: "4", name: "in a telephone kiosk"},
                    {id: "5", name: "in a post office"}   

                ],
                data: ""                
                        
        } , {   id:"18",
                question: "Which is not a vegetable?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "a cabbage"},
                    {id: "2", name: "a cauliflower"},
		    {id: "3", name: "a plum"},
                    {id: "4", name: "a carrot"},
                    {id: "5", name: "a beetroot"}   

                ],
                data: ""                
                        
        }, {   id:"19",
                question: "Which of these means at once?",
                rightAnswer: "5",
                options: [
                    {id: "1", name: "at present"},
                    {id: "2", name: "shortly"},
		    {id: "3", name: "soon"},
                    {id: "4", name: "later"},
                    {id: "5", name: "immediately"}   

                ],
                data: ""                
                        
        },{   id:"20",
                question: "Eat is to hungry as drink is to",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "thirsty"},
                    {id: "2", name: "wet"},
		    {id: "3", name: "tired"},
                    {id: "4", name: "hot"},
                    {id: "5", name: "cold"}   

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
