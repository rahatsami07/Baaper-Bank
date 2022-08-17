//Recursion::::  eta mane oylo gia ekta  function r vitre arekta function re call kora;
/* 

##  number + sum( number - 1);
number =5;

if( number == 1 ){
    retrun 1
}

 5 + sum (5-1) ===> 5 + sum(4)
 5 + sum (4-1) ===> 5 + sum(3)
 5 + sum (3-1) ===> 5 + sum(2)
 5 + sum (2-1) ===> 5 + sum(1)
 5 + sum (1);
 then return = 1..........................that it.

the resukt if===> 5+4+3+2+1=15

*/

function sum(number) {
    if (number == 10) {
        return 10
    }
    return number + sum(number + 1);
}
const result = sum(5);
console.log(result);