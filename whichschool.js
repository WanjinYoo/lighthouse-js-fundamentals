const whichSchool = function(age){
 return (age < 13) ? "Elementary School" : (age >= 13 && age <= 18) ? "Secondary School" : "Lighthouse Labs";
}



console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));