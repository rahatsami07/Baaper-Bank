////Different types of Split::::
const Lovers = "Allah. Muhammadur-Rasulullah(S.W). Parents. My sweetHeart Wife, but still now i don't know who is she!!";

console.log(Lovers.split('.'));
console.log(Lovers.split(' '));
console.log(Lovers.split(''));


////slice::
////Substring::    both are same 

const love = "My Sweetheart WIFE. But still now I don't know  Who is she!!";
const find = love.indexOf("W");
console.log(find);
const MyLove = love.slice(14, 18);
let myLove = love.substring(14, 18);
console.log(myLove);
console.log(MyLove);