var cpuGen= [];
var flag= false;
var counter = [];
numberRandomInRange(1,100);


// Random in range gen
function numberRandomInRange(min, max) {  
    for (var i = 0; i < 16; i++) {
        var number =Math.floor(Math.random() * (max - min + 1)); 
        if(!cpuGen.includes(number)){
            cpuGen.push(number);
        }
        
    }      
        
   
}
console.log("i numeri generati sono: ", cpuGen);





function userTyping(){
    var i = 0;
    while( !flag && i < 84){
        var userInput = parseInt(prompt("Enter a value 1-100"));
        
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

userTyping();


function endGame(){
    var record =0;
    
    for (let i = 0; i < counter.length; i++) {
        record++;
        
    }
    console.log("Il tuo record: ", record);
    
}
