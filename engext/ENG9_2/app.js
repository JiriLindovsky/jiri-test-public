var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {/*kniha str56-*/
        name: "Gramatika",
        source:"Longman English Grammar Practice - kvalitní originální kvíz",
        fields: [
            {   id:"1",
                question: "Which sentences are grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "Do you know John Smith? Is he the one who phoned last night?"},
                    {id: "2", name: "Do you know John Smith? Is he one who phoned last night?"}
                ],
                data: ""
            },{   id:"2",
                question: "Which senteces are not grammatically correct?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "Don't use that milk. Use this fresh milk."},
                    {id: "2", name: "Don't use that milk. Use this fresh."},
		    {id: "3", name: "Don't use that milk. Use this fresh one."}
                ],
                data: ""
            }, {   id:"3",
                question: "Which sentence is grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "I want these"},
                    {id: "2", name: "I want these ones"}
   
                ],
                data: ""
            }, {   id:"4",
                question: "Which sentences are grammatically correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "Is what you told me truth? I believe it."},
                    {id: "2", name: "Is what you told me truth? I believe so."},
                    {id: "3", name: "Is what you told me truth? I believe."}
                ],
                data: ""
            }, {   id:"5",
                question: "Which sentences are not grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "Is that true? I don't think."},
                    {id: "2", name: "Is that true? I don't think so."},
                    {id: "3", name: "Is that true? I think not."}
                ],
                data: ""
            }, {   id:"6",
                question: "Which sentence is grammatically correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "That is mine book."},
                    {id: "2", name: "That book is mine."},
		    {id: "3", name: "That's the my car."},
                    {id: "4", name: "That car's the mine."}
                ],
                data: ""
            }, {   id:"7",
                question: "Which sentence is grammatically correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "He is a friend of your's."},
                    {id: "2", name: "He is a friend of yours."},
                    {id: "3", name: "He is a friend of me."}
                ],
                data: ""
            }, {   id:"8",
                question: "Which sentence is grammatically correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "He is a friend of my father"},
                    {id: "2", name: "He is a friend of my father's"}
                ],
                data: ""
            }, {   id:"9",
                question: "Which sentence is grammatically correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "I have a room of mine own."},
                    {id: "2", name: "I have my own room."},
                    {id: "3", name: "I have my mine own room."} 
                ],
                data: ""
            }, {   id:"10",
                question: "Which expression is informal?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "How are your children?"},
                    {id: "2", name: "How are the children?"}
                ],
                data: ""
            }, {   id:"11",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "He amused me."},
                    {id: "2", name: "I amused me"}
                     
                ],
                data: ""
            } 
             , {   id:"12",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "Polly's now learnt how to dress herself."},
                    {id: "2", name: "Polly's now learnt how to dress."},
                    {id: "3", name: "Polly's now learnt how to dress hers."}


                ],
                data: ""
            }  , {   id:"13",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "Have you get any money on you?"},
                    {id: "2", name: "Have you get any money on yourself?"}

                ],
                data: ""
            }, {   id:"14",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "There's not one here."},
                    {id: "2", name: "There's no one here."},
                    {id: "3", name: "There's not anyone here."}

                ],
                data: ""
            } , {   id:"15",
                question: "Which sentence is  grammatically more correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "Everyone knows what he has to do, doesn't he?"},
                    {id: "2", name: "Everyone knows what they have to do, don't they?"},
		    
                ],
                data: ""
            } , {   id:"16",
                question: "Which sentences is not grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "Did you buy any froot? Yes , I bought a lot of."},
                    {id: "2", name: "Did you buy any froot? Yes , I bought a lot."}

                ],
                data: ""
            } , {   id:"17",
                question: "Is less the comparative of little?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "No."},
                    {id: "2", name: "Yes."}
                ],
                data: ""                
                        
        } , {   id:"18",
                question: "Which sentences is more informal?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "Fewer people are travelling abroad this year."},
                    {id: "2", name: "Less people are travelling abroad this year."}

                ],
                data: ""                
                       
        }, {   id:"19",
                question: "Which sentence is correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "The whole film was boringTe's own."},
                    {id: "2", name: "The whole bread was rotten."}
                     

                ],
                data: ""                
                        
        },{   id:"20",
                question: "Which expression is not grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "a whole hour"},
                    {id: "2", name: "all the hour"}

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
