 ///Find who is the winner:::
 const sami = 67;
 const samad = 97;
 const sayeed = 99;
 /////////First Way:::
 if (sami > samad && sami > sayeed) {
     console.log('Sami is the Winner')
 } else if (samad > sami && samad > sayeed) {
     console.log('Samad is the winner')
 } else {
     console.log('Sayeed is the winner')
 };

 ////Secound Way❤
 const result = Math.max(sami, samad, sayeed);
 console.log("Max number=>", result);
 const results = Math.min(sami, samad, sayeed);
 console.log("min number=>", results);



 //////////////////////////////////////////
 function FindWinner(sami, samad, sayeed) {
     if (sami > samad && sami > sayeed) {
         console.log("Sami is the winner")
     } else if (samad > sami && samad > sayeed) {
         console.log("Samad is the winner")
     } else {
         console.log("Sayeed is the winner")
     }

 }
 FindWinner(67, 97, 99);