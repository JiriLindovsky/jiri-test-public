var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {/*http://www.testomanie.cz/anglictina_testy/testing/test1.htm*/
        name: "Slovní zásoba - porozumění textu",
        source:"www.testomanie.cz/",
        fields: [
            {   id:"1",
                question: "The opposite of to break is ",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "to join"},
                    {id: "2", name: "to mend"},
		    {id: "3", name: "to fasten"},
                    {id: "4", name: "to cure"},
                    {id: "5", name: "to broken"}  
                ],
                data: ""
            },{   id:"2",
                question: "Laugh is to cry as smile is to ",
                rightAnswer: "5",
                options: [
                    {id: "1", name: "whisper"},
                    {id: "2", name: "teeth"},
		    {id: "3", name: "blink"},
                    {id: "4", name: "stare"},
                    {id: "5", name: "frown"} 
                ],
                data: ""
            }, {   id:"3",
                question: "Choose the one found most often with a cup. ",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "saucer"},
                    {id: "2", name: "dish"},
		    {id: "3", name: "spoon"},
                    {id: "4", name: "handle"},
                    {id: "5", name: "plate"}
   
                ],
                data: ""
            }, {   id:"4",
                question: "Now do you wear a scarf? ",
                rightAnswer: "5",
                options: [
                    {id: "1", name: "round your wrist"},
                    {id: "2", name: "round your waist"},
		    {id: "3", name: "round your shoulders"},
                    {id: "4", name: "on your foot"},
                    {id: "5", name: "round your neck"}
                ],
                data: ""
            }, {   id:"5",
                question: "Which means the same as to watch? ",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "to look at"},
                    {id: "2", name: "to look in"},
		    {id: "3", name: "to look for"},
                    {id: "4", name: "to look down"},
		    {id: "5", name: "to look out"}
                ],
                data: ""
            }, {   id:"6",
                question: "The opposite of cold is",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "hot"},
                    {id: "2", name: "warm"},
		    {id: "3", name: "cool"},
                    {id: "4", name: "boiling"},
                    {id: "5", name: "chilly"}
                ],
                data: ""
            }, {   id:"7",
                question: "Girl is to woman as girls are to ",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "womans"},
                    {id: "2", name: "woman's"},
		    {id: "3", name: "women"},
                    {id: "4", name: "womin"},
                    {id: "5", name: "woman"}
                ],
                data: ""
            }, {   id:"8",
                question: "Which means the same as to close?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "to shut"},
                    {id: "2", name: "to fasten"},
		    {id: "3", name: "to open"},
                    {id: "4", name: "to push"},
                    {id: "5", name: "to fill"}
                ],
                data: ""
            }, {   id:"9",
                question: "Which of these is made of wood? ",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "a violin"},
                    {id: "2", name: "a mirror"},
		    {id: "3", name: "a knife"},
                    {id: "4", name: "a tin"},
                    {id: "5", name: "a flower"}
                ],
                data: ""
            }, {   id:"10",
                question: "Forehead, chin and cheek all have something to do with ",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "the body"},
                    {id: "2", name: "the face"},
		    {id: "3", name: "food"},
                    {id: "4", name: "ships"},
                    {id: "5", name: "the mouth"} 
                ],
                data: ""
            }, {   id:"11",
                question: "Which word does not go with all the others?",
                rightAnswer: "5",
                options: [
                    {id: "1", name: "birds"},
                    {id: "2", name: "feathers"},
		    {id: "3", name: "a nest"},
                    {id: "4", name: "eggs"},
                    {id: "5", name: "a house"}  
                ],
                data: ""
            } 
             , {   id:"12",
                question: "Which of these is usually made of wool?",
                rightAnswer: "5",
                options: [
                    {id: "1", name: "a kitten"},
                    {id: "2", name: "a sheep"},
		    {id: "3", name: "a towel"},
                    {id: "4", name: "a wardrobe"},
                    {id: "5", name: "a cardigan"}   

                ],
                data: ""
            }  , {   id:"13",
                question: "Which word describes all the others? ",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "coffee"},
                    {id: "2", name: "tea"},
		    {id: "3", name: "hot chocolate"},
                    {id: "4", name: "drink"},
                    {id: "5", name: "cocoa"}   

                ],
                data: ""
            }, {   id:"14",
                question: "Which word means the same as easy?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "simple"},
                    {id: "2", name: "comfortable"},
		    {id: "3", name: "hard"},
                    {id: "4", name: "difficult"},
                    {id: "5", name: "quick"}   

                ],
                data: ""
            } , {   id:"15",
                question: "Which of these is yellow?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "silver"},
                    {id: "2", name: "lemon"},
		    {id: "3", name: "milk"},
                    {id: "4", name: "ink"},
                    {id: "5", name: "an orange"}   

                ],
                data: ""
            } , {   id:"16",
                question: "The opposite of early is ",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "last"},
                    {id: "2", name: "soon"},
		    {id: "3", name: "late"},
                    {id: "4", name: "first"},
                    {id: "5", name: "slow"}   

                ],
                data: ""
            } , {   id:"17",
                question: "Which is wrong?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "You shutted the drawer."},
                    {id: "2", name: "You did shut the drawer."},
		    {id: "3", name: "You are shutting the drawer."},
                    {id: "4", name: "You have shut the drawer."},
                    {id: "5", name: "You shut the drawer."}   

                ],
                data: ""                
                        
        } , {   id:"18",
                question: "Which word does not go with all the others?",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "ears"},
                    {id: "2", name: "a noise"},
		    {id: "3", name: "to hear"},
                    {id: "4", name: "to see"},
                    {id: "5", name: "to listen"}   

                ],
                data: ""                
                        
        }, {   id:"19",
                question: "How many is a couple? ",
                rightAnswer: "5",
                options: [
                    {id: "1", name: "ten"},
                    {id: "2", name: "five"},
		    {id: "3", name: "twelve"},
                    {id: "4", name: "one"},
                    {id: "5", name: "two"}   

                ],
                data: ""                
                        
        },{   id:"20",
                question: "When you are a customer, what are you doing? ",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "selling something"},
                    {id: "2", name: "eating something"},
		    {id: "3", name: "breaking something"},
                    {id: "4", name: "buying something"},
                    {id: "5", name: "making something"}   

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
