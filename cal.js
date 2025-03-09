const display =document.getElementById("display")
 function f(input){
     display.value += input;
 }
 function x(){
     display.value = "";
     }
function solve(){
         display.value = eval(display.value);
 }
