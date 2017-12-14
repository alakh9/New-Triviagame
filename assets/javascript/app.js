$(document).ready(function(){
    $("#main").hide()

    $("#start-button").click(function(){
        $("#main").show()
    
    var correctCount = 0;
    var wrongCount = 0;
    var number = 60;

    alert("Begin!");
    $("#start-button").on("click", start);  
    $("#submit-button").on("click", finish); 
  
    function start(){
        counter = setInterval(timer, 1000);
        $(".header").hide();
    }
    function timer(){
        number--;
        $("#show-number").html("<h4>" + number + "</h4>" );
        if (number === 0){
          alert("Time over!")
          stop();
        }
    }
    

    $("#submit-button").click(function(){
        $("#score").show();
        $(".questions").hide();
        $(".answers").hide();
        $("#submit-button").hide();

    });

    function stop(){
        clearInterval(counter);
        $("#score").show();
        $(".questions").hide();
        $(".answers").hide();
        $("#submit-button").hide();
    }
    function finish(){
        number = 1;
        clearInterval(counter); 
        timer();
    }
  
    
        start(); 
    });

    
    function timeover(){
               
        var Q1 = $('input:radio[name="q1"]:checked').val();
        console.log("this is q1" + Q1)
        var Q2 = $('input:radio[name="q2"]:checked').val();
        var Q3 = $('input:radio[name="q3"]:checked').val();
        var Q4 = $('input:radio[name="q4"]:checked').val();
        var Q5 = $('input:radio[name="q5"]:checked').val();
        var Q6 = $('input:radio[name="q6"]:checked').val();
        var Q7 = $('input:radio[name="q7"]:checked').val();
        var Q8 = $('input:radio[name="q8"]:checked').val();
        var Q9 = $('input:radio[name="q9"]:checked').val();

        if(Q1 == "1b"){
            correctCount++;
        }
        else{
            wrongCount++;
        }

        if(Q2 == "2c"){
            correctCount++;
        }
        else{
            wrongCount++;
        }       

        if(Q3 == "3c"){
            correctCount++;
        }
        else{
            wrongCount++;
        }
        if(Q4 == "4a"){
            correctCount++;
        }
        else{
            wrongCount++;
        }
        if(Q5 == "5b"){
            correctCount++;
        }
        else{
            wrongCount++;
        }
        if(Q6 == "6d"){
            correctCount++;
        }
        else{
            wrongCount++;
        }
        if(Q7 == "7d"){
            correctCount++;
        }
        else{
            wrongCount++;
        }
        if(Q8 == "8c"){
            correctCount++;
        }
        else{
            wrongCount++;
        }
        if(Q9 == "9a"){
            correctCount++;
        }
        else{
            wrongCount++;
        }
    };

    function score(){

        $("#score").append("<h4>" + correctCount + "</h4>" );
        $("#score").append("<h4>" + wrongCount + "</h4>" );

    }





  });