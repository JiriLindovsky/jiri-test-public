var app = angular.module('quiz', []);

app.controller('QuizController', function ($scope) {


$scope.entity = {
        name: "Quiz",
		visibleRAH:false,
        fields: [
            {
                question: "Kdo přišel s Metodějem?",
                rightAnswer: "Cyril",								
				answer:"",
				hint:"Problém je v tom, že..."/*,
                options: [
                    {id: "1", name: "7.století n.l."},
                    {id: "2", name: "8.století n.l."},
                    {id: "3", name: "9.století n.l."}
                ],
                data: ""*/
            },
            {
                question: "Kdo je synem Karla 4",
                rightAnswer: "Václav 4",								
				answer:"",
				hint:"Problém je v tom, že..."/*,
                options: [
                    {id: "1", name: "7.století n.l."},
                    {id: "2", name: "8.století n.l."},
                    {id: "3", name: "9.století n.l."}
                ],
                data: ""*/
            }            
              
        ]
    };
	
	$scope.getKomentar = function(field){
		var status1="SPRÁVNÁ ODPOVĚĎ";
		var status0="ŠPATNÁ ODPOVĚĎ";
		var hodnoceni="";
		var hint="";
		if ($scope.entity.visibleRAH&&field.answer=== field.rightAnswer) 
		{hodnoceni=status1; hint="|"+field.rightAnswer+"|Hint: "+field.hint;}
	    else 
		{if (!$scope.entity.visibleRAH) {hodnocení="";hint=""}
	     else {hodnoceni=status0; hint="| "+field.rightAnswer+"|Hint:"+field.hint;}
	    }
	console.log(hodnoceni);   		
		return hodnoceni+hint;
	}
    $scope.showAsRightAnswer = function (field) {
        return $scope.entity.visibleRAH && field.answer=== field.rightAnswer;
    };

    $scope.getStyle = function (field) {
        return (field.answer === field.rightAnswer) ? {color: "white"} : {color: "black"};
    };

    $scope.submitForm = function () {
        $scope.entity.visibleRAH = true;
    }
    /*$scope.getPocetKvizu= function () {return $scope.entity.fields.length;}
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
*/
});
