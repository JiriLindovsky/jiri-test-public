var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {/*kniha str76-*/
        name: "Gramatika",
        source:"Longman English Grammar Practice - kvalitní originální kvíz",
        fields: [
            {   id:"1",
                question: "Which sentence is grammatically correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "All wanted Marilyn's autograph."},
                    {id: "2", name: "Everone wanted Marilyn's autograph."}
                ],
                data: ""
            },{   id:"2",
                question: "Which senteces are not grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "He gave me everything."},
                    {id: "2", name: "He gave me all."}
                ],
                data: ""
            }, {   id:"3",
                question: "Which sentence is incorrect?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "Each child in the world loves the story of Cinderella."},
                    {id: "2", name: "Every child in the world loves the story of Cinderella."}
   
                ],
                data: ""
            }, {   id:"4",
                question: "Which sentence is grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "Nearly every shop is shut today"},
                    {id: "2", name: "Nearly each shop is shut today"}
                  
                ],
                data: ""
            }, {   id:"5",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "Not each train driver is on strike today."},
                    {id: "2", name: "Not every train driver is on strike today."}
                ],
                data: ""
            }, {   id:"6",
                question: "Which sentence is grammatically correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "Every of the children received present"},
                    {id: "2", name: "Each of the children received present"}
                ],
                data: ""
            }, {   id:"7",
                question: "Which sentence is grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "They received a present each."},
                    {id: "2", name: "They received a present every."}
                ],
                data: ""
            }, {   id:"8",
                question: "Which sentence is better?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "Neither lift is working."},
                    {id: "2", name: "Neither of the lifts is working."}
                ],
                data: ""
            }, {   id:"9",
                question: "Which sentence is more formal?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "Neither of us is happy about this."},
                    {id: "2", name: "Neither of us are happy about this."} 
                ],
                data: ""
            }, {   id:"10",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "Every room is booked."},
                    {id: "2", name: "Every single one of the rooms is booked"},
                    {id: "3", name: "Every of the rooms is booked."}
   
                ],
                data: ""
            }, {   id:"11",
                question: "Which expression is not grammatically correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "a twenty-year-old man"},
                    {id: "2", name: "a twenty-years-old man"},
                    {id: "3", name: "a man of twenty years"}
                     
                ],
                data: ""
            } 
             , {   id:"12",
                question: "Which expression is better?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "a twenty-year-old man"},
                    {id: "2", name: "a man of twenty years"}
                     

                ],
                data: ""
            }  , {   id:"13",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "He is a young."},
                    {id: "2", name: "He is a young man."}

                ],
                data: ""
            }, {   id:"14",
                question: "Which sentence is not grammatically correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "You poor thing!"},
                    {id: "2", name: "You poor!"}

                ],
                data: ""
            } , {   id:"15",
                question: "Which sentence is  grammatically incorrect?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "We have opened a new school for the blind."},
                    {id: "2", name: "We have opened a new school for the blind people."},
		    {id: "3", name: "We have opened a new school for the blinds."}
                ],
                data: ""
            } , {   id:"16",
                question: "Which expresion is not grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "a fine teak kitchen cupboard"},
                    {id: "2", name: "a teak fine kitchen cupboard"}

                ],
                data: ""
            } , {   id:"17",
                question: "Which sentence is  grammatically incorrect?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "He's the eldest."},
                    {id: "2", name: "He is elder than me."}
                ],
                data: ""                
                        
        } , {   id:"18",
                question: "Which sentence is grammatically correct?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "Meg always greets me in a friendly way."},
                    {id: "2", name: "Meg always greets me friendly."},
                    {id: "3", name: "Meg always greets me friendlily."}

                ],
                data: ""                
                       
        }, {   id:"19",
                question: "Which sentence is not correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "I'm seeing him Monday."},
                    {id: "2", name: "I'm seeing him the Monday."}
                     

                ],
                data: ""                
                        
        },{   id:"20",
                question: "Which expression is not grammatically correct?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "last night"},
                    {id: "2", name: "yesterday night"}

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
