// Log the array element with its index usin forEach () with arrow function

console.log("==========Q 1 Log the array element with its index usin forEach () with arrow function");

const array_numbers=[1,-7,40,502,77,91,0,108,89,-601];

array_numbers.forEach((value,index) => console.log(value, "  " ,index));

// find the positive numbers and log on console

console.log("============Q 2 find the positive numbers and log on console");

    array_numbers.forEach((value)=>{ 
        if(value>0){
         console.log(value);}});

         console.log("============Q 3 find the negative numbers and log on console");
         
    array_numbers.forEach((value)=>{ 
        if(value<0){
         console.log(value);}});

         console.log("============Q 4 find the even numbers and log on console using foreach method with arrow function ");
         
    array_numbers.forEach((value)=>{ 
        if(value%2==0){
         console.log(value);}});

         console.log("============Q 5 find the sum of all elements from array numbers and log on console");
         let sum = 0;
         array_numbers.forEach((value)=> {
             console.log(sum += value);
         });

         console.log("============Q 6 Log the only even positioned array value on console");
         array_numbers.forEach((value, arrindex)=> {
         if ( arrindex %2 ==0 && arrindex>0) {
            console.log(value);
         }
         });

         console.log("============Q 7 Log the odd positioned arra value on console id negative");
         array_numbers.forEach((value, arrindex)=> {
         if ( arrindex %2 !=0 && value<0) {
            console.log(value);
         }
         });