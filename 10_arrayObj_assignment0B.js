// Log the first element on console 
console.log("=========Q-1 print first element on console=============");
let fruits_seasonal = ['Banana', 'Orange', 'Apple', 'Mango', 'Water_melon'];
console.log(fruits_seasonal);
console.log("First index-->  " + fruits_seasonal[0]);
console.log("Last index-->  " + fruits_seasonal[4]);

console.log("=========Q-2 Add 'Papaya' element =============");

fruits_seasonal.splice(0, 0, "Papaya");
console.log(fruits_seasonal);

console.log("=========Q-3 Remove element mango =============");

fruits_seasonal.pop(3);
console.log(fruits_seasonal);

console.log("=========Q-4 Add 'Pineapple' element at the last position =============");

fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);

console.log("=========Q-5 Add 'Dragon fruit' element before watermelon =============");


fruits_seasonal.splice(4, 0, "Dragon fruit");
console.log(fruits_seasonal);

console.log("=========Q-6 Replace an element Orange with Kiwi =============");

fruits_seasonal.splice(1, 1, "Kiwi");
console.log(fruits_seasonal);

console.log("=========Q-7 Log on element from 1 to 4 =============");
console.log(fruits_seasonal.slice(1, 4));

console.log("=========Q-8 Only select last 3 elements using lenght property =============");
console.log(fruits_seasonal.slice(-3));