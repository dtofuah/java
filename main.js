
var math = ["Algebra", "Calculus"];
var chemistry = ["Organic", "Inorganic"];
var subject = [chemistry, math];

console.log(subject[0][0]);
console.log(subject[1][0]);




function name(firstName){
  return "You are hard working, " +firstName;

};
console.log(name('paul'))



var x = 99;
 while (x > -1) {
   console.log ( x + " Bottles of Beer on the wall,");
   x--;
 };



var myArray = ["Nike", "Addidas", "Rebok", "Under Armour"];
function arrayCounter (array) {
  console.log("Entering function");
   for (var i = array.length - 1; i >= 0; --i) {
     console.log(array[i]);
    }
 }
arrayCounter(myArray);
