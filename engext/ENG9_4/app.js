var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {/*kniha str94-*/
        name: "Gramatika",
        source:"Longman English Grammar Practice - kvalitní originální kvíz",
        fields: [
            {   id:"1",
                question: "Which sentence is grammatically incorrect?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "I'll wait here till five o'clock."},
                    {id: "2", name: "I'll wait here until five o'clock."},
                    {id: "3", name: "I'll wait here by five o'clock."}
                ],
                data: ""
            },{   id:"2",
                question: "Which senteces are not grammatically correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "She won't arrive till 5."},
                    {id: "2", name: "She will arrive till 5."}
                ],
                data: ""
            }, {   id:"3",
                question: "Which sentence is grammatically incorrect?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "We watched a film in the flight."},
                    {id: "2", name: "We watched a film during the flight."}
   
                ],
                data: ""
            }, {   id:"4",
                question: "Which sentence is grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "We stayed in Recife for three weeks."},
                    {id: "2", name: "We stayed in Recife during three weeks."}
                  
                ],
                data: ""
            }, {   id:"5",
                question: "Which sentence is grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "He hardly ever writes."},
                    {id: "2", name: "He almost always doesn't write."},
                    {id: "3", name: "He doesn't hardly ever write."}    
                ],
                data: ""
            }, {   id:"6",
                question: "Which sentences are grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "What's Yoko's English like? It's quite good."},
                    {id: "2", name: "What's Yoko's English like? It's enough good."}
                ],
                data: ""
            }, {   id:"7",
                question: "Which sentence is grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "Billy can't write yet and he can't read, either."},
                    {id: "2", name: "Billy can't write yet and he can't read, too."}
                ],
                data: ""
            }, {   id:"8",
                question: "Which sentence is more formal?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "She's also a mother."},
                    {id: "2", name: "She's a mother, too."}
                ],
                data: ""
            }, {   id:"9",
                question: "Which sentence is grammatically correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "Sit beside."},
                    {id: "2", name: "Sit beside me."} 
                ],
                data: ""
            }, {   id:"10",
                question: "Which expression is not grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "according to me"},
                    {id: "2", name: "in my opinion"}
   
                ],
                data: ""
            }, {   id:"11",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "Between you and I, I think he's a fool"},
                    {id: "2", name: "Between you and me, I think he's a fool"}
                     
                ],
                data: ""
            } 
             , {   id:"12",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "They are laying a pipeline over Siberia."},
                    {id: "2", name: "They are laying a pipeline across Siberia."}
                     

                ],
                data: ""
            }  , {   id:"13",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "She swam across the Channel."},
                    {id: "2", name: "She swam over the Channel"}

                ],
                data: ""
            }, {   id:"14",
                question: "Which expression is not grammatically correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "over the wall"},
                    {id: "2", name: "across the wall"}

                ],
                data: ""
            } , {   id:"15",
                question: "Which sentence is  grammatically incorrect?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "We had a swim in the sea. Afterwards we lay on the beach."},
                    {id: "2", name: "We had a swim in the sea. After we lay on the beach."}
		    
                ],
                data: ""
            } , {   id:"16",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "He lives around here."},
                    {id: "2", name: "He lives about here"}

                ],
                data: ""
            } , {   id:"17",
                question: "Which sentence is grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "I live 5 miles away."},
                    {id: "2", name: "I live 5 miles far away."}
                ],
                data: ""                
                        
        } , {   id:"18",
                question: "Which sentence is grammatically correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "Except you, everyone has helped."},
                    {id: "2", name: "Except for you, everyone has helped."}

                ],
                data: ""                
                       
        }, {   id:"19",
                question: "Which sentence is correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "But for you, everyone has helped."},
                    {id: "2", name: "But you, everyone has helped."}
                     

                ],
                data: ""                
                        
        },{   id:"20",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "I work as a receptionist."},
                    {id: "2", name: "I work like a receptionist."}

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
