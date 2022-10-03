var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {/*kniha str30-56*/
        name: "Gramatika",
        source:"Longman English Grammar Practice - kvalitní originální kvíz",
        fields: [
            {   id:"1",
                question: "Which expression is grammatically correct?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "a clothing"},
                    {id: "2", name: "a luggage"},
		    {id: "3", name: "a coat"}
                ],
                data: ""
            },{   id:"2",
                question: "Which expression is grammatically correct?",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "an information"},
                    {id: "2", name: "some informations"},
		    {id: "3", name: "informations"},
                    {id: "4", name: "some information"},  
                ],
                data: ""
            }, {   id:"3",
                question: "Which expression is not grammatically correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "a slice of cake"},
                    {id: "2", name: "a slice of soap"},
                    {id: "3", name: "a slice of meat"}
   
                ],
                data: ""
            }, {   id:"4",
                question: "Which expression is grammatically correct?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "foots"},
                    {id: "2", name: "tooths"},
                    {id: "3", name: "women"}
                ],
                data: ""
            }, {   id:"5",
                question: "Which sentence is grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "The public want to know how they are governed."},
                    {id: "2", name: "The publics want to know how they are governed."}
                ],
                data: ""
            }, {   id:"6",
                question: "Which sentence is grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "There are too many people in the world."},
                    {id: "2", name: "There is too many people in the world."},
		    {id: "3", name: "There are too many peoples in the world."}
                ],
                data: ""
            }, {   id:"7",
                question: "Which sentence is grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "Mathematics is not the most popular school subject."},
                    {id: "2", name: "Mathematics are not the most popular school subject."}
                ],
                data: ""
            }, {   id:"8",
                question: "Which expression is grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "Frank's car"},
                    {id: "2", name: "The car of Frank"},
		    {id: "3", name: "The car of Frank's"}
                   
                ],
                data: ""
            }, {   id:"9",
                question: "Which expression is grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "the book of the film"},
                    {id: "2", name: "the film's book"}
                ],
                data: ""
            }, {   id:"10",
                question: "Which expression is grammatically correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "the box's top"},
                    {id: "2", name: "the top of a box"}
                ],
                data: ""
            }, {   id:"11",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "He's doctor."},
                    {id: "2", name: "He is a doctor."}
                     
                ],
                data: ""
            } 
             , {   id:"12",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "It's a postman."},
                    {id: "2", name: "It's the postman."}

                ],
                data: ""
            }  , {   id:"13",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "She's gone to the butcher's."},
                    {id: "2", name: "She's gone to a butcher's."}

                ],
                data: ""
            }, {   id:"14",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "Running is good for a heart."},
                    {id: "2", name: "Running is good for the heart."}

                ],
                data: ""
            } , {   id:"15",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "Beans are good for you."},
                    {id: "2", name: "The beans are good for you."},
		    
                ],
                data: ""
            } , {   id:"16",
                question: "Which expression is not grammatically correct?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "Sir John"},
                    {id: "2", name: "Sir John Falstaff"},
		    {id: "3", name: "Sir Falstaff"}

                ],
                data: ""
            } , {   id:"17",
                question: "Which sentence is grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "Jane's gone to school."},
                    {id: "2", name: "Jane's at the school."},
                    {id: "2", name: "Jane's in the hospital."}
                ],
                data: ""                
                        
        } , {   id:"18",
                question: "Which sentences are grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "My wife's firm has an office in Edinburgh."},
                    {id: "2", name: "My wife's firm has office in Edinburgh."}

                ],
                data: ""                
                       
        }, {   id:"19",
                question: "Which sentence is informal?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "The moment one gets into the mountains, one is on one's own."},
                    {id: "2", name: "The moment you get into the mountains, you are on your own."}
                     

                ],
                data: ""                
                        
        },{   id:"20",
                question: "Which sentences are not grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "Don't use that cloth. Use this clean."},
                    {id: "2", name: "Don't use that cloth. Use this clean one."}

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
