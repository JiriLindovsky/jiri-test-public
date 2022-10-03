var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {
        name: "Quiz",
        fields: [
            {
                question: "Ve třídě je 24 žáků a každý sportuje. 18 žáků plave, 12 žáků lyžuje. Kolik žáků jen plave?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "6"},
                    {id: "2", name: "12"},
                    {id: "3", name: "18"}
                ],
                data: ""
            },
            {
                question: "Jana se během víkendu připravovala do školy celkem 5 hodin a 20 minut. Z toho matematice se věnovala o 50 minut více než českému jazyku. Jak dlouho se učila matematiku?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "2 hodiny a 55 minut"},
                    {id: "2", name: "3 hodiny a 0 minut"},
                    {id: "3", name: "3 hodiny a 5 minut"}
                    
                ],
                data: ""
            }
            ,
            {
                question: "Když dědeček odebral z košíku čtyři pětiny hrušek, které naložil na vozík, a osm jich rozdal čtyřem vnoučatům, zůstaly v košíku ještě čtyři hrušky. Kolik bylo v košíku původně hrušek?",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "40"},
                    {id: "2", name: "50"},
                    {id: "3", name: "60"}

                ],
                data: ""
            },
             {
                question: "V tělocvičně v řadě na značkách stálo 26 dívek. Vzdálenost mezi první a poslední byla 10 metrů. Jak byly od sebe vzdáleny 2. a 7. dívka?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "1,5 metru"},
                    {id: "2", name: "2 metry"},
                    {id: "3", name: "2,5 metru"}

                ],
                data: ""
            },
                         


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
