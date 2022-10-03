var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {
        name: "Test(porozumění textu): It has been proven that children from bilingual families have better language competence considering the abilities of expressing themselves or processing new information faster.Beside their language skills, they are also seen as generally more flexible, quickly responding to various kinds of changes and more tolerant towards other cultures. On the other hand, growing up in bilingual environment can have a disturbing impact on one's personality:it has been identified that such people can have a strong feeling of not belonging anywhere or not having a real home. Also the language in which such people think is still an object of exploration.",
        source:"Tvoje státní maturita 2014:kolektiv autorů",
        fields: [
            {
                question: "According to the article, bilingual people can",
                rightAnswer: "3",
                options: [
                    {id: "1", name: "be flexible only within their own culture"},
                    {id: "2", name: "speak more than two languagers fluently"},
                    {id: "3", name: "be more adaptable to different kinds of situations"},
                    {id: "4", name: "express themselves worse than people from monolingual families"}
                ],
                data: ""
            } ,{
                question: "According to the article, what can be a disadvantage of growing up in a bilingual family?",
                rightAnswer: "2",
                options: [
                    {id: "1", name: "Such people can have split personalities."},
                    {id: "2", name: "Problems with feeling somewhere like at home."},
                    {id: "3", name: "Feeling of disturbing someone by speaking two languages."},
                    {id: "4", name: "Thiking in more than one language."}
                ],
                data: ""
            },{
                question: "Which would be the most suitable title for the article?",
                rightAnswer: "1",
                options: [
                    {id: "1", name: "Bilingual family: Privilege or Burden?"},
                    {id: "2", name: "Children from Bilingual Environment are Endangered"},
                    {id: "3", name: "How to Think in another Language?"},
                    {id: "4", name: "What Does Bilingualism Mean"}
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
