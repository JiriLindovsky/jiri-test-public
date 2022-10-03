var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {/*http://www.testomanie.cz/anglictina_testy/testing/test1.htm*/
        name: "Slovní zásoba - porozumění textu",
        source:"www.testomanie.cz/",
        fields: [
            {   id:"1",
                question: "Which of these is not a relation? ",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "an uncle"},
                    {id: "2", name: "a friend"},
		    {id: "3", name: "a brother"},
                    {id: "4", name: "a sister"},
                    {id: "5", name: "am aunt"}  
                ],
                data: ""
            },{   id:"2",
                question: "The opposite of dangerous is",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "pleasant"},
                    {id: "2", name: "comfortable"},
		    {id: "3", name: "beautiful"},
                    {id: "4", name: "safe"},
                    {id: "5", name: "easy"} 
                ],
                data: ""
            }, {   id:"3",
                question: "Which word describes all the others?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "a blouse"},
                    {id: "2", name: "clothes"},
		    {id: "3", name: "a jacket"},
                    {id: "4", name: "trousers"},
                    {id: "5", name: "a skirt"}
   
                ],
                data: ""
            }, {   id:"4",
                question: "Which is wrong?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "Make the beds."},
                    {id: "2", name: "Make some coffee"},
		    {id: "3", name: "I am going to make my hair."},
                    {id: "4", name: "Make me laugh."},
                    {id: "5", name: "Make up your mind!"}
                ],
                data: ""
            }, {   id:"5",
                question: "If you call a girl Jenny, her name is ",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "Jennifer"},
                    {id: "2", name: "Janet"},
		    {id: "3", name: "Jean"},
                    {id: "4", name: "Joyce"},
		    {id: "5", name: "Joan"}
                ],
                data: ""
            }, {   id:"6",
                question: "The opposite of come is ",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "came"},
                    {id: "2", name: "arrive"},
		    {id: "3", name: "go"},
                    {id: "4", name: "went"},
                    {id: "5", name: "leave"}
                ],
                data: ""
            }, {   id:"7",
                question: "Which is wrong?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "I lent her money."},
                    {id: "2", name: "I have lend her money."},
		    {id: "3", name: "I did lend her money."},
                    {id: "4", name: "I lend her money."},
                    {id: "5", name: "I am lending her money."}
                ],
                data: ""
            }, {   id:"8",
                question: "England is to English as Germany is to ",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "Dutch"},
                    {id: "2", name: "German"},
		    {id: "3", name: "Germanish"},
                    {id: "4", name: "Germany"},
                    {id: "5", name: "Germish"}
                ],
                data: ""
            }, {   id:"9",
                question: "Which of these trees has nuts?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "ash"},
                    {id: "2", name: "almond"},
		    {id: "3", name: "elm"},
                    {id: "4", name: "fir"},
                    {id: "5", name: "oak"}
                ],
                data: ""
            }, {   id:"10",
                question: "Which of these is wrong?",
                rightAnswer: "5",
                options: [
                    {id: "1", name: "a rainy day"},
                    {id: "2", name: "a sunny day"},
		    {id: "3", name: "a cloudy day"},
                    {id: "4", name: "a fine day"},
                    {id: "5", name: "a clean day"} 
                ],
                data: ""
            }, {   id:"11",
                question: "Which of these is made of glass? ",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "a tumbler"},
                    {id: "2", name: "a cup"},
		    {id: "3", name: "a knife"},
                    {id: "4", name: "teeth"},
                    {id: "5", name: "sand"}  
                ],
                data: ""
            } 
             , {   id:"12",
                question: "Which is not a fruit?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "an apple"},
                    {id: "2", name: "a pear"},
		    {id: "3", name: "a pea"},
                    {id: "4", name: "a lemon"},
                    {id: "5", name: "an orange"}   

                ],
                data: ""
            }  , {   id:"13",
                question: "Which word means the same as also?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "too"},
                    {id: "2", name: "all"},
		    {id: "3", name: "toe"},
                    {id: "4", name: "to"},
                    {id: "5", name: "two"}   

                ],
                data: ""
            }, {   id:"14",
                question: "Which means the same as to answer? ",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "to reply"},
                    {id: "2", name: "to ask"},
		    {id: "3", name: "to say"},
                    {id: "4", name: "to talk"},
                    {id: "5", name: "to speak"}   

                ],
                data: ""
            } , {   id:"15",
                question: "Where does a porter work?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "in an airplane"},
                    {id: "2", name: "in a railway station"},
		    {id: "3", name: "in a library"},
                    {id: "4", name: "in a church"},
                    {id: "5", name: "in a supermarket"}   

                ],
                data: ""
            } , {   id:"16",
                question: "Which word describes all the others?",
                rightAnswer: "5",
                options: [
                    {id: "1", name: "an actress"},
                    {id: "2", name: "a niece"},
		    {id: "3", name: "a spinster"},
                    {id: "4", name: "a nun"},
                    {id: "5", name: "a female"}   

                ],
                data: ""
            } , {   id:"17",
                question: "Which vegetable do British people never cook?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "potatoes"},
                    {id: "2", name: "radishes"},
		    {id: "3", name: "beans"},
                    {id: "4", name: "celery "},
                    {id: "5", name: "cabbage"}   

                ],
                data: ""                
                        
        } , {   id:"18",
                question: "Which word does not go with all the others?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "a helicopter"},
                    {id: "2", name: "an elephant"},
		    {id: "3", name: "to fly"},
                    {id: "4", name: "a plane"},
                    {id: "5", name: "a rocket"}   

                ],
                data: ""                
                        
        }, {   id:"19",
                question: "The opposite of good is ",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "bad"},
                    {id: "2", name: "better"},
		    {id: "3", name: "worse"},
                    {id: "4", name: "worst"},
                    {id: "5", name: "best"}   

                ],
                data: ""                
                        
        },{   id:"20",
                question: "The opposite of to buy is ",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "to steal"},
                    {id: "2", name: "to have"},
		    {id: "3", name: "to sell"},
                    {id: "4", name: "to keep"},
                    {id: "5", name: "to take"}   

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
