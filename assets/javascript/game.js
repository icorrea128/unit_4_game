//Comments

   //The game appears to be broken. The win/lose ogic only works for some randomNumbers.The reset is also a little off. 
   //Please help me to solve the problems with the code

//Global Variables

var randomNumber;
var randNumber1
var randNumber2;
var randNumber3
var randNumber4;
var randNumber5;
var randomNumberdiv;
var randomNumberappend;
var result = 0;
var wins = 1;
var win1 = "WIN!"
var losses = 1;
var lose1 = "LOSER!"
var total_score;
//Functions

$(document).ready(function() {

    function number (){
        var randomNumber1 = Math.floor(Math.random() * 150);
        return randomNumber1; 
        };

    function number_1 (){
        var randomNumber2 = Math.floor(Math.random() * 10);
    return randomNumber2; 
    };

    function number_2 (){
        var randomNumber3 = Math.floor(Math.random() * 15);
        return randomNumber3;
    };

    function number_3 (){
        var randomNumber4 = Math.floor(Math.random() * 20);
        return randomNumber4;
    };

    function number_4 (){
        var randomNumber5 = Math.floor(Math.random() * 25);
        return randomNumber5;
    };

    randomNumber = number();
    function numberDisplay (){
            randomNumber;
            var randomNumberdiv  = $("#randomNumber")
            var randomNumberdiv1 = $("<div>" + randomNumber + "<div>");
            randomNumberappend = randomNumberdiv.append(randomNumberdiv1);
            return randomNumberappend;
        }
    numberDisplay();

    function resetScore(){
        result = 0;
        // var result2 = $("#totalScore");
        // var result3 = $("<div>"+ result1 + "<div>");
        // $(result2.append(result3));
        $("#finalScore").text(result);
    }
    console.log(resetScore());
    function reset(){
        number_1();
        number_2();
        number_3();
        number_4();
        var resetNumber = number();
        $("#randomNumber").text(resetNumber);
        resetScore();
    }

    function win() {
        var totalWins = wins++;
        console.log(totalWins);
        //try innerHTML to keep count of wins and losses
        var html ="<p>Wins: " + totalWins + "</p>";
        document.querySelector("#wins").innerHTML = html;
        // var totalWins_1 = $("#wins");
        // var totalWins_2 = $("<div>" + totalWins + "<div>")
        // $(totalWins_1).append(totalWins_2);
        var html1 ="<p>Result: " + win1 + "</p>";
        document.querySelector("#winLose").innerHTML = html1;
        // var result1 = $("#winLose");
        // var result2 = $("<div>"+ win1 + "<div>");
        // $(result1.append(result2));
        reset();
        // var result1 = 0;
        // $("#totalScore").text(result1);
    }

    function lose(){
        var totalLosses = losses++;
        console.log(totalLosses);
        //try innerHTML to keep count of wins and losses
        var html ="<p>Loses: " + totalLosses + "</p>";
        document.querySelector("#lose").innerHTML = html;
        // var totallose_1 = $("#lose");
        // var totallose_2 = $("<div>" + totalLosses + "<div>")
        // $(totallose_1).append(totallose_2);
        var html1 ="<p>Result: " + lose1 + "</p>";
        document.querySelector("#winLose").innerHTML = html1;
        // var result3 = $("#winLose");
        // var result4 = $("<div>"+ lose1 + "<div>");
        // $(result3.append(result4));
        reset();
        
    }

    randNumber1  = number_1();
    console.log(randNumber1)
    randNumber2 = number_2();
    console.log(randNumber2)
    randNumber3 = number_3();
    console.log(randNumber3)
    randNumber4 = number_4();
    console.log(randNumber4)

//Main Process

//On Click Events for each crystal with a determined value 
$("#crystal_1").on("click",function(){
    result = result + randNumber1
    $("#totalScore").text(result);

//logic to determine if win or lost 
    if (result == randomNumber){
        win();
        // resetScore();
        // result = 0;
        // $("#totalScore").text(result)
    }
    else if (result > randomNumber){
        lose(); 
        // resetScore();        
        // result = 0;
        // $("#totalScore").text(result)
    }
});

$("#crystal_2").on("click",function(){
    result = result + randNumber2
    $("#totalScore").text(result);

//logic to determine if win or lost 
    if (result == randomNumber){
        win();
        // resetScore();        
        // result = 0;
        // $("#totalScore").text(result)
    }
    else if (result > randomNumber){
        lose();
        // resetScore();        
        // result = 0;
        // $("#totalScore").text(result) 
    }
});

$("#crystal_3").on("click",function(){
    result = result + randNumber3
    $("#totalScore").text(result);

//logic to determine if win or lost 
    if (result == randomNumber){
        win();
        // resetScore();        
        // result = 0;
        // $("#totalScore").text(result)
    }
    else if (result > randomNumber){
        lose();
        // resetScore();         
        // result = 0;
        // $("#totalScore").text(result)
    }
});

$("#crystal_4").on("click",function(){
    result = result + randNumber4
    console.log(result);
    $("#totalScore").text(result);
    if (result == randomNumber){
        win();
        // resetScore();        
        // result = 0;
        // $("#totalScore").text(result)
        
    }
    else if (result > randomNumber){
        lose();
        // resetScore();         
        // result = 0;
        // $("#totalScore").text(result)
    }
console.log(result)
});

});
