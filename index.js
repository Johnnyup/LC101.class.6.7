

/*
function addTwoNumbers(num1,num2) {
let answer = num1 + num2;
return answer;
}

console.log(addTwoNumbers(3, 5));

let favMovie = "Ghost Busters";
let imdbRating = 7.8;
let cast = ["Bill", "Dan", "Sigourney"];

favMovie.split("");
*/


/*
const cast = ["Bill", "Dan", "Sigourney"];


const newArr = cast.map(function (item) {
  return "The Star: " + item;

});



console.log(newArr);
*/

const cast = ["Bill", "Dan", "Sigourney"];
console.log(cast);

const newArr = cast.map(function (castMember) {
  return castMember[0];
});

console.log(cast);
console.log(newArr);



// anonymous functions

// when do we used anonymous vs named fncts
// used when you need to get into function as argument
// as parameter or argument

//anonymous functions not meant for call back, does task then forgotten about
// named functions are heavier and stay arount, we want to keep them and reuse them

const myAnonFunc = function (castMember) {
  return castMember[0];
};

const newArr2 = cast.map(myAnonFunc);
console.log(cast);
console.log(newArr);
console.log(newArr2);


// anonymous functions are used and fogotten about
// named functions remain for the life of the application
