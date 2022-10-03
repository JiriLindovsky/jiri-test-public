var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {/*kniha str2-30*/
        name: "Gramatika",
        source:"Longman English Grammar Practice - kvalitní originální kvíz",
        fields: [
            {   id:"1",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "Yesterday I bought a hat."},
                    {id: "2", name: "I bought a hat yesterday."},
		    {id: "3", name: "I bought yesterday a hat."}
                ],
                data: ""
            },{   id:"2",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "A hat I bought yesterday."},
                    {id: "2", name: "Yesterday I bought a hat."},
		    {id: "3", name: "I bought a hat yesterday."}
                ],
                data: ""
            }, {   id:"3",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "John Bailey has set a new high-jump record."},
                    {id: "2", name: "A new that high-jump record was set by John Bailey."},
		    {id: "3", name: "A new high-jump record John Bailey set."}
   
                ],
                data: ""
            }, {   id:"4",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "'I'm tired', he said."},
                    {id: "2", name: "'I'm tired,' he said."}
                ],
                data: ""
            }, {   id:"5",
                question: "Which sentence is grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "He is tired."},
                    {id: "2", name: "Is tired."},
		    {id: "3", name: "tired is he."}
                ],
                data: ""
            }, {   id:"6",
                question: "Which sentence is grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "Arsenal beat Liverpool."},
                    {id: "2", name: "Arsenal beat."},
		    {id: "3", name: "Arsenal Liverpool beat."}
                ],
                data: ""
            }, {   id:"7",
                question: "Which sentence is grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "We arrived at 11."},
                    {id: "2", name: "We arrived the station at 11."}
                ],
                data: ""
            }, {   id:"8",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "Arsenal won the match."},
                    {id: "2", name: "Arsenal won."},
		    {id: "3", name: "The match won Arsenal."}
                   
                ],
                data: ""
            }, {   id:"9",
                question: "Which sentence is grammatically correct?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "Give John it."},
                    {id: "2", name: "Buy John them."},
		    {id: "3", name: "Buy them for John."}
                ],
                data: ""
            }, {   id:"10",
                question: "Which sentence is grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "Explain me the situation."},
                    {id: "2", name: "Explain the situation to me."}
                ],
                data: ""
            }, {   id:"11",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "He washed the car and polished it."},
                    {id: "2", name: "He washed the car, but didn't polish it."},
		    {id: "3", name: "He washed the car, and polished it."}
                     
                ],
                data: ""
            } 
             , {   id:"12",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "It's obvious that he's going to be late."},
                    {id: "2", name: "I know that he's going to be late."},
		    {id: "3", name: "I know he's going to be late."},
                    {id: "4", name: "It's a pity he's going to be late."}

                ],
                data: ""
            }  , {   id:"13",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "He is the man that lives here."},
                    {id: "2", name: "He is the man who he lives here."}

                ],
                data: ""
            }, {   id:"14",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "He's the man that I met him."},
                    {id: "2", name: "He's the man who I met."}

                ],
                data: ""
            } , {   id:"15",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "He is the person to whom I wrote."},
                    {id: "2", name: "He is the man to who I wrote."},
		    
                ],
                data: ""
            } , {   id:"16",
                question: "Which sentence is grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "They're people whose cars were stolen."},
                    {id: "2", name: "They're people whose their cars were stolen."},
		    {id: "3", name: "They're people what their cars were stolen."}

                ],
                data: ""
            } , {   id:"17",
                question: "Which sentence is grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "The Owens will move to a new flat when their baby is born."},
                    {id: "2", name: "The Owens will move to a new flat when their baby will be born."}
                ],
                data: ""                
                        
        } , {   id:"18",
                question: "Which expression mean 'a watch made of gold'?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "a golden watch."},
                    {id: "2", name: "a gold watch."}

                ],
                data: ""                
                        
        }, {   id:"19",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "I bought a book."},
                    {id: "2", name: "I bought the book."},
		    {id: "3", name: "I bought book."}
                     

                ],
                data: ""                
                        
        },{   id:"20",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "How much bread will you need?"},
                    {id: "2", name: "How many breads will you need?"}

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
