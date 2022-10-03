var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {
        name: "Adjectives and Prepositions",
        source:"http://www.roadtogrammar.com/",
        fields: [
            {   id:"1",
                question: "Ronald is particularly fond ____ jelly beans.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "of"},
                    {id: "2", name: "at"},
		    {id: "3", name: "on"}
                ],
                data: ""
            },
            {   id:"2",
                question: "Shirley is keen ____ horses.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "on"},
                    {id: "2", name: "to"},
		    {id: "3", name: "with"}
                ],
                data: ""
            },{id:"3",
                question: "I am only interested ______ making money, baby.",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "with"},
                    {id: "2", name: "to"},
		    {id: "3", name: "in"}
                ],
                data: ""
            },{id:"4",
                question: "Mr. Goodson is good _____ basketball.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "about"},
                    {id: "2", name: "at"},
		    {id: "3", name: "on"}
                ],
                data: ""
            },{id:"5",
                question: "I am absolutely fascinated ______ nature.",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "for"},
                    {id: "2", name: "about"},
		    {id: "3", name: "by"}
                ],
                data: ""
            },{ id:"6",
                question: "Gary is terrified _______ spiders.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "of"},
                    {id: "2", name: "with"},
		    {id: "3", name: "to"}
                ],
                data: ""
            },{ id:"7",
                question: "I am annoyed ________ her attitude.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "with"},
                    {id: "2", name: "for"},
		    {id: "3", name: "against"}
                ],
                data: ""
            },{ id:"8",
                question: "What are you afraid ______?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "to"},
                    {id: "2", name: "with"},
		    {id: "3", name: "of"}
                ],
                data: ""
            },{id:"9",
                question: "He is really shy ______ girls.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "at"},
                    {id: "2", name: "with"},
		    {id: "3", name: "for"}
                ],
                data: ""
            },{ id:"10",
                question: "The taste is different _________ what I had expected.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "with"},
                    {id: "2", name: "from "},
		    {id: "3", name: "about"}
                ],
                data: ""
            },{id:"11",
                question: "I’m addicted _____ these sweets. I love them!",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "at"},
                    {id: "2", name: "on"},
		    {id: "3", name: "to"}
                ],
                data: ""
            },{id:"12",
                question: "You should be ashamed _____ your behavior!",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "of"},
                    {id: "2", name: "from"},
		    {id: "3", name: "to"}
                ],
                data: ""
            },{id:"13",
                question: "Are you aware _____ the new guidelines?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "of"},
                    {id: "2", name: "to"},
		    {id: "3", name: "on"}
                ],
                data: ""
            },{id:"14",
                question: "I’m so jealous _____ her new cellphone!",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "of"},
                    {id: "2", name: "with"},
		    {id: "3", name: "at"}
                ],
                data: ""
            },{id:"15",
                question: "People are getting fed up _____ these high prices.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "with"},
                    {id: "2", name: "on"},
		    {id: "3", name: "for"}
                ],
                data: ""
            },{id:"16",
                question: "His mother was so proud _____ him when he got into Harvard.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "of"},
                    {id: "2", name: "to"},
		    {id: "3", name: "with"}
                ],
                data: ""
            },{id:"17",
                question: "I’m used _____ spicy curries. I once lived in Sri Lanka for a year.",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "at"},
                    {id: "2", name: "with"},
		    {id: "3", name: "to"}
                ],
                data: ""
            },{id:"18",
                question: "What’s wrong _____ this tap? I can’t turn it off.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "with"},
                    {id: "2", name: "on"},
		    {id: "3", name: "for"}
                ],
                data: ""
            },{ id:"19",
                question: "He’s really bad _____ tennis. You’ll beat him easily.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "with"},
                    {id: "2", name: "at"},
		    {id: "3", name: "for"}
                ],
                data: ""
            },{id:"20",
                question: "I’m rather impressed _____ the new BMW.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "for"},
                    {id: "2", name: "with"},
		    {id: "3", name: "to"}
                ],
                data: ""
            },{id:"21",
                question: "Are you related _____ Mr. Smithers?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "to"},
                    {id: "2", name: "on"},
		    {id: "3", name: "at"}
                ],
                data: ""
            },{id:"22",
                question: "I’m really sensitive _____ loud noises.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "to"},
                    {id: "2", name: "from"},
		    {id: "3", name: "on"}
                ],
                data: ""
            },{id:"23",
                question: "This safe is full _____ cash.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "of"},
                    {id: "2", name: "with"},
		    {id: "3", name: "at"}
                ],
                data: ""
            },{id:"24",
                question: "We’ll keep you safe _____ harm.",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "with"},
                    {id: "2", name: "at"},
		    {id: "3", name: "from"}
                ],
                data: ""
            },{id:"25",
                question: "Australia is famous _____ kangaroos and other odd creatures.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "on"},
                    {id: "2", name: "for"},
		    {id: "3", name: "with"}
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
