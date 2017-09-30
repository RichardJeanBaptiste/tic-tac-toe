$( document ).ready(function() {
  
   $("#main_menu").on("click", function(){
         window.location.href = "main.html";
   });

   function checkWin(){
       var a = $("#btn1").html();
       var b = $("#btn2").html();
       var c = $("#btn3").html();
       var d = $("#btn4").html();
       var e = $("#btn5").html();
       var f = $("#btn6").html();
       var g = $("#btn7").html();
       var h = $("#btn8").html();
       var i = $("#btn9").html();

      
       if(a == b && b == c){
       	alert("Winner Winner Chicken Dinner");
       }else if(d == e && e == f){
        alert("Winner Winner Chicken Dinner");
       }else if(g == h && h == i){
         alert("Winner Winner Chicken Dinner");     
       }else if(a == d && d == g){
         alert("Winner Winner Chicken Dinner"); 
       }else if(c == f && f == i){
       	 alert("Winner Winner Chicken Dinner"); 
       }else if(b == e && e == h){
       	 alert("Winner Winner Chicken Dinner"); 
       }else if(a == e && e == i){
         alert("Winner Winner Chicken Dinner"); 
       }else if(c == e && e == g){
         alert("Winner Winner Chicken Dinner"); 
       }
     

   };

   
   function gameStart(){
       
       var turn = 1; 

        alert("Start game");
        
        $("#btn1").click(function(){
           if (turn == 1 || turn == 3 || turn == 5 || turn == 7 || turn == 9) {
               $("#btn1").html("X");
               $("#btn1").removeClass("hidden_color");
               $("#btn1").addClass("black_letter");
               turn += 1 ;
              //console.log(turn);
              
           }else{
           	$("#btn1").html("O");
           	$("#btn1").removeClass("hidden_color");
            $("#btn1").addClass("black_letter");
           	  turn += 1;
           };
           checkWin();
        });

         $("#btn2").click(function(){
           if (turn == 1 || turn == 3 || turn == 5 || turn == 7 || turn == 9) {
               
              $("#btn2").html("X");
              $("#btn2").removeClass("hidden_color");
              $("#btn2").addClass("black_letter");
               turn += 1 ;
              console.log(turn);
           }else{
           	$("#btn2").html("O");
           	$("#btn2").removeClass("hidden_color");
            $("#btn2").addClass("black_letter");
           	  turn += 1;
           };
        checkWin();
        });

         $("#btn3").click(function(){
           if (turn == 1 || turn == 3 || turn == 5 || turn == 7 || turn == 9) {
               $("#btn3").html("X");
               $("#btn3").removeClass("hidden_color");
              $("#btn3").addClass("black_letter");
               turn += 1 ;
              console.log(turn);
              
           }else{
           	$("#btn3").html("O");
           	$("#btn3").removeClass("hidden_color");
            $("#btn3").addClass("black_letter");
           	  turn += 1;
           };
        checkWin();
        });

         $("#btn4").click(function(){
           if (turn == 1 || turn == 3 || turn == 5 || turn == 7 || turn == 9) {
               $("#btn4").html("X");
               $("#btn4").removeClass("hidden_color");
              $("#btn4").addClass("black_letter");
               turn += 1 ;
              console.log(turn);
           }else{
           	$("#btn4").html("O");
           	$("#btn4").removeClass("hidden_color");
            $("#btn4").addClass("black_letter");
           	  turn += 1;
           };
           checkWin();
        });

         $("#btn5").click(function(){
           if (turn == 1 || turn == 3 || turn == 5 || turn == 7 || turn == 9) {
               $("#btn5").html("X");
               $("#btn5").removeClass("hidden_color");
              $("#btn5").addClass("black_letter");
               turn += 1 ;
              console.log(turn);
           }else{
           	$("#btn5").html("O");
           	$("#btn5").removeClass("hidden_color");
              $("#btn5").addClass("black_letter");
           	  turn += 1;
           };
           checkWin();
        });


         $("#btn6").click(function(){
           if (turn == 1 || turn == 3 || turn == 5 || turn == 7 || turn == 9) {
               $("#btn6").html("X");
               $("#btn6").removeClass("hidden_color");
              $("#btn6").addClass("black_letter");
               turn += 1 ;
              console.log(turn);
           }else{
           	$("#btn6").html("O");
           	$("#btn6").removeClass("hidden_color");
            $("#btn6").addClass("black_letter");
           	  turn += 1;
           };
           checkWin();
        });


        $("#btn7").click(function(){
           if (turn == 1 || turn == 3 || turn == 5 || turn == 7 || turn == 9) {
               $("#btn7").html("X");
               $("#btn7").removeClass("hidden_color");
               $("#btn7").addClass("black_letter");
               turn += 1 ;
              console.log(turn);
           }else{
           	$("#btn7").html("O");
           	$("#btn7").removeClass("hidden_color");
            $("#btn7").addClass("black_letter");
           	  turn += 1;
           };
           checkWin();
        });

        $("#btn8").click(function(){
           if (turn == 1 || turn == 3 || turn == 5 || turn == 7 || turn == 9) {
               $("#btn8").html("X");
               $("#btn8").removeClass("hidden_color");
               $("#btn8").addClass("black_letter");
               turn += 1 ;
              console.log(turn);
           }else{
           	$("#btn8").html("O");
           	$("#btn8").removeClass("hidden_color");
            $("#btn8").addClass("black_letter");
           	  turn += 1;
           };
           checkWin();
        });

        $("#btn9").click(function(){
           if (turn == 1 || turn == 3 || turn == 5 || turn == 7 || turn == 9) {
               $("#btn9").html("X");
               $("#btn9").removeClass("hidden_color");
               $("#btn9").addClass("black_letter");
               turn += 1 ;
              console.log(turn);
           }else{
           	$("#btn9").html("O");
           	$("#btn9").removeClass("hidden_color");
            $("#btn9").addClass("black_letter");
           	  turn += 1;
           };
           checkWin();
        });


}
 gameStart();

   

});
