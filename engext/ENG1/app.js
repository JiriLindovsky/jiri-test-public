var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {
        name: "Kvíz ENG1",/*Bakalářová*/
        fields: [
            {
                question: "She was expected to come at five o'clock and she arrived exactly....time.",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "at"},
                    {id: "2", name: "with"},
                    {id: "3", name: "on"},
                    {id: "4", name: "by"}

                ],
                data: ""
            }
		,{
                question: "Let's go to a restaurant,.....?",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "do we"},
                    {id: "2", name: "let we"},
                    {id: "3", name: "will you"},
                    {id: "4", name: "shall we"}

                ],
                data: ""
            } 
            ,{
                question: "We can't.....a new house. It's too expensive.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "afford"},
                    {id: "2", name: "pay"},
                    {id: "3", name: "to buy"},
                    {id: "4", name: "spend"}

                ],
                data: ""
            },{
                question: "When I was having bath the lights.... out and I was left in darkness.",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "put"},
                    {id: "2", name: "turned"},
                    {id: "3", name: "went"},
                    {id: "4", name: "gone"}

                ],
                data: ""
            },{
                question: "He will repair the car tomorrow if .... time.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "had"},
                    {id: "2", name: "has"},
                    {id: "3", name: "have"},
                    {id: "4", name: "will have"}

                ],
                data: ""
            },{
                question: "If you are going to visit Mary, could you please .... this book to her?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "take"},
                    {id: "2", name: "lend"},
                    {id: "3", name: "pick"},
                    {id: "4", name: "fetch"}

                ],
                data: ""
            },{
                question: "I think .... this house needs is a swimming pool.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "what"},
                    {id: "2", name: "that"},
                    {id: "3", name: "which"},
                    {id: "4", name: "how"}

                ],
                data: ""
            },{
                question: "I wish I .... how to help you.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "have known"},
                    {id: "2", name: "knew"},
                    {id: "3", name: "could knew"},
                    {id: "4", name: "know"}

                ],
                data: ""
            },{
                question: "I am fed up .....listening to your stupid excuses every day.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "of"},
                    {id: "2", name: "with"},
                    {id: "3", name: "to"},
                    {id: "4", name: "because"}

                ],
                data: ""
            },{
                question: "If she hadn't been unfaithful, he.... her.",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "wouldn't leave"},
                    {id: "2", name: "doesn't leave"},
                    {id: "3", name: "wouldn't have left"},
                    {id: "4", name: "wouldn't left"}

                ],
                data: ""
            },{
                question: "I am going to the dentist.... .",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "to have my tooth pulled out"},
                    {id: "2", name: "to have pulled out my tooth"},
                    {id: "3", name: "have filled my tooth out"},
                    {id: "4", name: "to make my tooth pulled out"}

                ],
                data: ""
            },{
                question: "You ..... better not tell lies to your mother.",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "would"},
                    {id: "2", name: "should"},
                    {id: "3", name: "had"},
                    {id: "4", name: "ought"}

                ],
                data: ""
            },{
                question: "Despite being warned, Peter hasn't been able to stop...... .",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "cheat"},
                    {id: "2", name: "to be cheat"},
                    {id: "3", name: "cheating"},
                    {id: "4", name: "cheated"}

                ],
                data: ""
            },{
                question: "I am in a hurry but I'll ...... my best to help you.",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "do"},
                    {id: "2", name: "work"},
                    {id: "3", name: "make"},
                    {id: "4", name: "give"}

                ],
                data: ""
            },{
                question: "This bulding is ...... as a warehouse at the moment.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "having used"},
                    {id: "2", name: "being used"},
                    {id: "3", name: "having been used"},
                    {id: "4", name: "to use"}

                ],
                data: ""
            },{
                question: "I've got some sugar, but not ...... .",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "many"},
                    {id: "2", name: "a lot of"},
                    {id: "3", name: "much"},
                    {id: "4", name: "a good many"}

                ],
                data: ""
            },{
                question: "...... a present for your wife when I saw you this afternoon?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "Have you been buying"},
                    {id: "2", name: "Have you bought"},
                    {id: "3", name: "Were you buying"},
                    {id: "4", name: "Are you buying"}

                ],
                data: ""
            },{
                question: "I think you would go mad if you ...... your job.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "gave up"},
                    {id: "2", name: "gave off"},
                    {id: "3", name: "give up"},
                    {id: "4", name: "gave out"}

                ],
                data: ""
            },{
                question: "My father said that spot ...... the best place for a picnic",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "is"},
                    {id: "2", name: "has been"},
                    {id: "3", name: "liked"},
                    {id: "4", name: "was"}

                ],
                data: ""
            },{
                question: "We won't be able to get into the house ...... we have a key",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "unless"},
                    {id: "2", name: "if"},
                    {id: "3", name: "provided"},
                    {id: "4", name: "when"}

                ],
                data: ""
            },{
                question: "I think it's time ...... .",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "we separated"},
                    {id: "2", name: "we separate"},
                    {id: "3", name: "we are separating"},
                    {id: "4", name: "we to separate"}

                ],
                data: ""
            },{
                question: "We must wait ...... Monday morning for our exam results.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "till"},
                    {id: "2", name: "after"},
                    {id: "3", name: "by"},
                    {id: "4", name: "later on"}

                ],
                data: ""
            },{
                question: "I ...... you since 9 o'clock. Where have you been?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "am waiting for"},
                    {id: "2", name: "am expecting"},
                    {id: "3", name: "have been waiting for"},
                    {id: "4", name: "waited for"}

                ],
                data: ""
            },{
                question: "...... Mont Blanc is the highest mountain in tha Alps",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "The"},
                    {id: "2", name: " - "},
                    {id: "3", name: "A"},
                    {id: "4", name: "An"}

                ],
                data: ""
            },{
                question: "The exercise was ...... complicated that I gave up.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "so"},
                    {id: "2", name: "such"},
                    {id: "3", name: "too"},
                    {id: "4", name: "such a"}

                ],
                data: ""
            },{
                question: "He had to take her to the stations, ...... ?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "did he"},
                    {id: "2", name: "didn't he"},
                    {id: "3", name: "had he"},
                    {id: "4", name: "hadn't he"}

                ],
                data: ""
            },{
                question: "It is very important to ...... a good impression at the interview.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "make"},
                    {id: "2", name: "do"},
                    {id: "3", name: "take"},
                    {id: "4", name: "give"}

                ],
                data: ""
            },{
                question: "I am looking ...... his glasses.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "to"},
                    {id: "2", name: "for"},
                    {id: "3", name: "after"},
                    {id: "4", name: "at"}

                ],
                data: ""
            },{
                question: "Why ...... the milk? Does it smell sour?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "do you smell"},
                    {id: "2", name: "you smell"},
                    {id: "3", name: "are you smelling"},
                    {id: "4", name: "have you smelling"}

                ],
                data: ""
            },{
                question: "He looks terrible. He ...... be tired.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "must"},
                    {id: "2", name: "have to"},
                    {id: "3", name: "should"},
                    {id: "4", name: "would"}

                ],
                data: ""
            },{
                question: "You may smoke on the balcony or ...... the garden but not in your room",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "on"},
                    {id: "2", name: "in"},
                    {id: "3", name: "at"},
                    {id: "4", name: "out"}

                ],
                data: ""
            },{
                question: "...... have beer or wine?",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "Do you prefer"},
                    {id: "2", name: "Do you like"},
                    {id: "3", name: "Would you rather"},
                    {id: "4", name: "Would you like"}

                ],
                data: ""
            },{
                question: "You ...... the money for we had a credit card.",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "mustn't change"},
                    {id: "2", name: "needen't change"},
                    {id: "3", name: "didn't have to change"},
                    {id: "4", name: "needn't have changed"}

                ],
                data: ""
            },{
                question: "I used to ...... alcohol, but now I'm a teetotaller.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "drinking"},
                    {id: "2", name: "drink"},
                    {id: "3", name: "drank"},
                    {id: "4", name: "be drinking"}

                ],
                data: ""
            },{
                question: "...... his old age, he got married",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "In spite"},
                    {id: "2", name: "Although"},
                    {id: "3", name: "Though"},
                    {id: "4", name: "Despite"}

                ],
                data: ""
            },{
                question: "He swims ...... a fish.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "as"},
                    {id: "2", name: "like"},
                    {id: "3", name: "such"},
                    {id: "4", name: "similar"}

                ],
                data: ""
            },{
                question: "Hold ...... a minute. I won't be long",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "up"},
                    {id: "2", name: "on"},
                    {id: "3", name: "out"},
                    {id: "4", name: "off"}

                ],
                data: ""
            },{
                question: "Clare's flight has been delayed ...... to bad weather.",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "on account of"},
                    {id: "2", name: "for"},
                    {id: "3", name: "because"},
                    {id: "4", name: "due"}

                ],
                data: ""
            },{
                question: "Under no ...... will I allow such a thing.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "circumstances"},
                    {id: "2", name: "situations"},
                    {id: "3", name: "circumstance"},
                    {id: "4", name: "situation"}

                ],
                data: ""
            },{
                question: "My job is ...... .",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "exhausted"},
                    {id: "2", name: "exhausting"},
                    {id: "3", name: "bored"},
                    {id: "4", name: "tired"}

                ],
                data: ""
            },{
                question: "It was ...... film I have ever seen",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "worse"},
                    {id: "2", name: "worst"},
                    {id: "3", name: "terrifying"},
                    {id: "4", name: "the worst"}

                ],
                data: ""
            },{
                question: "I like ...... in bed until midday.",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "lying"},
                    {id: "2", name: "to lie"},
                    {id: "3", name: "liying"},
                    {id: "4", name: "to lay"}

                ],
                data: ""
            },{
                question: "I am used ...... a lot of tea",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "to drik"},
                    {id: "2", name: "drinking"},
                    {id: "3", name: "to drinking"},
                    {id: "4", name: "drink"}

                ],
                data: ""
            },{
                question: "He ...... in bed since he broke his leg.",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "is"},
                    {id: "2", name: "was"},
                    {id: "3", name: "has been"},
                    {id: "4", name: "were"}

                ],
                data: ""
            },{
                question: "She works even better than ...... .",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "others"},
                    {id: "2", name: "the others"},
                    {id: "3", name: "others people"},
                    {id: "4", name: "another"}

                ],
                data: ""
            },{
                question: "The bath is full ...... hot water.",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "from"},
                    {id: "2", name: "up"},
                    {id: "3", name: "of"},
                    {id: "4", name: "with"}

                ],
                data: ""
            },{
                question: "Don't ask me to dance - I'm hopeless ...... dancing.",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "in"},
                    {id: "2", name: "with"},
                    {id: "3", name: "at"},
                    {id: "4", name: "about"}

                ],
                data: ""
            },{
                question: "I don't have ...... to help you now.",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "enough of time"},
                    {id: "2", name: "a time"},
                    {id: "3", name: "enough time"},
                    {id: "4", name: "plenty time"}

                ],
                data: ""
            },{
                question: "Neither my father ..... my mother could understand my problem.",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "or"},
                    {id: "2", name: "nor"},
                    {id: "3", name: "and"},
                    {id: "4", name: "neither"}

                ],
                data: ""
            },{
                question: "Although she tried to open the door as ....... as she could she woke up her child.",
                rightAnswer: "4",
                options: [
                    {id: "1", name: "quiet"},
                    {id: "2", name: "more quiet"},
                    {id: "3", name: "quite"},
                    {id: "4", name: "quietly"}

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
