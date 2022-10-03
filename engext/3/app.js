var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {
        name: "Quiz",
        fields: [
            {
                question: "Následník rakousko-uherského trůnu zastřelený atentátníkem v Sarajevu se jmenoval:",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "František Ferdinand d´Este"},
                    {id: "2", name: "František Josef I."},
                    {id: "3", name: "Josef II."}
                ],
                data: ""
            },
            {
                question: "Rakousko-uherský císař, během jehož vlády došlo k první světové válce, se jmenoval:",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "Ferdinand Habsburský"},
                    {id: "2", name: "Josef I."},
                    {id: "3", name: "František Josef I."}
                    
                ],
                data: ""
            }
            ,
            {
                question: "Kteří politici vyjednávali v exilu vznik samostatného Československa?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "Bývalý říšský poslanec Tomáš G. Masaryk, francouzský generál Milan Rastislav Štefánik a diplomat Edvard Beneš"},
                    {id: "2", name: "Antonín Švehla, Alois Rašín, Jiří Stříbrný, Vavro Šrobár a František Soukup"},
                    {id: "3", name: "Karel Kramář, Karel 1. Habsburský, prezident Wilson"}

                ],
                data: ""
            },
             {
                question: "Kolik mírových bodů obsahoval dokument amerického prezidenta Wilsona?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "10"},
                    {id: "2", name: "14"},
                    {id: "3", name: "20"}

                ],
                data: ""
            },
             {
                question: "Které mocnosti - označované jako státy Dohody či Trojdohody - jako první přislíbily uznat nárok Československa na samostatnost ?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "Francie, Velká Británie a Rusko"},
                    {id: "2", name: "Rakousko-Uhersko, Německo a Itálie"},
                    {id: "3", name: "Československo, Rumunsko a Jugoslávie"}

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
