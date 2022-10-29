console.log("=============Q-1 Find the total element or lenght============");
const array_numbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(array_numbers.length);

console.log("=============Q-2 Log the first element and last element============");

console.log("First element--> " + array_numbers[0]);
var lastele=array_numbers.length-1;
console.log("Last  element--> " + array_numbers[lastele]);

console.log("=========Q-3 log the trird last element using lenght property==========================");
var thirdele=array_numbers.length-3;
console.log("Third last  element--> " + array_numbers[thirdele]);

console.log("=========Q-4 Find the all even numbers==========================");

for (let index = 0; index < array_numbers.length; index++) {
    var num=array_numbers[index];
    if(num%2==0){
        console.log(num);
    }
}

console.log("=========Q-5 Find the all odd numbers==========================");
   
for (let index = 0; index < array_numbers.length; index++) {
    var num=array_numbers[index];
    if(num%2!=0){
        console.log(num);
    }
}   

console.log("=========Q-6 Find all the even positioned elements=========================");
var count=0;
for (let index = 0; index < array_numbers.length; index++) {
    count=count+1;
    if (count%2==0) {
        console.log(array_numbers[index]);
    }
    
}

console.log("=========Q-7 Find all the odd positioned elements=========================");
var count=0;
for (let index = 0; index < array_numbers.length; index++) {
    count=count+1;
    if (count%2!=0) {
        console.log(array_numbers[index]);
    }
    
}

console.log("=========Q-8 sum of all elements and log on console=========================");

var count=0;
for (let index = 0; index < array_numbers.length; index++) {
    count=count+array_numbers[index];
}
console.log("Total addition of elements--> " +count);

console.log("=========Q-9 Is number 115 available in array_numbers=========================");
var resout=array_numbers.includes(115);
console.log(resout);

console.log("=========Q-10 Is number 23 available in array_numbers=========================");
var resout1=array_numbers.includes(23);
console.log(resout1);