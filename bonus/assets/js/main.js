var cpuGen= [];
var flag= false;
var counter = [];
var minValue=0;
var maxValue=0;



var difficulty =parseInt(prompt("Choose type of difficulty: 0 => 1-100, 1 => 1-80, 2 => 1-50 "))

switch (difficulty){
    case 0:
        var minValue=1;
        var maxValue=100;
        numberRandomInRange(minValue,maxValue);
        console.log("i numeri generati sono: ", cpuGen);
        userTyping();
        break;
    case 1:
        var minValue=1;
        var maxValue=80;
        numberRandomInRange(minValue,maxValue);
        console.log("i numeri generati sono: ", cpuGen);
        userTyping();
        break;
    case 2:
        var minValue=1;
        var maxValue=50;
        numberRandomInRange(minValue,maxValue);
        console.log("i numeri generati sono: ", cpuGen);
        userTyping();
        break;
    default:
        console.log("Not valid value!!");

}


// Random in range gen
function numberRandomInRange(min, max) {  
    for (var i = 0; i < 16; i++) {
        var number =Math.floor(Math.random() * (max - min + 1)); 
        if(!cpuGen.includes(number)){
            cpuGen.push(number);
        }
        
    }      
        
   
}


function userTyping(){
    var i = 0;
    while( !flag && i < 84){
        if (maxValue == 100) {
            var userInput = parseInt(prompt("Enter a value 1-100: "));
        }else if (maxValue == 80) {
            var userInput = parseInt(prompt("Enter a value 1-80: "));
        }else if (maxValue == 50) {
            var userInput = parseInt(prompt("Enter a value 1-50: "));
        }
        
        
        for (let j = 0; j < cpuGen.length; j++) {
            if (userInput == cpuGen[j]) {
                flag= true;
            }
            
        }
        if (flag) {
            console.log("Hai perso");
            endGame();
        }
        
        i++;
        counter.push(i);
    }
    
    return counter;
    
    
    
}




function endGame(){
    var record =0;
    
    for (let i = 0; i < counter.length; i++) {
        record++;
        
    }
    console.log("Il tuo record: ", record);
    
}
