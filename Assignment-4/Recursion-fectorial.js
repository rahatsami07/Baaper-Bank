/* 

##  number * sum( number - 1);
number =5;

if( number == 1 ){
    retrun 1
}

 5 * sum (5-1) ===> 5 * sum(4)
 5 * sum (4-1) ===> 5 * sum(3)
 5 * sum (3-1) ===> 5 * sum(2)
 5 * sum (2-1) ===> 5 * sum(1)
 5 * sum (1);
 then return = 1..........................that it.

the resukt if===> 5*4*3*2*1=15

*/


function fectorial(number) {
    if (number == 1) {
        return 1;
    }
    return number * fectorial(number - 1);
}
const result = fectorial(5);
console.log(result);