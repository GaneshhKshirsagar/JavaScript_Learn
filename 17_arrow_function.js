
console.log("Q 1-->  With no args and no return values log message on function ");
 
let hello = () => {
    console.log("Good afternoon today  is friday");
   }
hello();

console.log("Q 2 (a)-->  With 3 args and no return values for received 3 parameter multification ");
let multiplication = (arg1,arg2,arg3) => {
    let resOfMul=arg1*arg2*arg3;
    console.log(resOfMul);
   }
   multiplication(5,5,2);

   console.log("Q 2 (b) -->  With 3 args and no return values for received 3 parameter multification ");
let multiplication2 = (arg1,arg2) => {
    let resOfMul=arg1*arg2*arg3;
    console.log(resOfMul);
   }
   multiplication2(5,5, arg3=3);

   console.log("Q 3 (a) -->  with 5 arg and return value such as for received params it should do the addition");
let addition = (num1,num2,num3,num4,num5) => {
    let total=num1+num2+num3+num4+num5;
    console.log("Addition of numbers  " + total);
   }
   addition(100,100,200,349,756);

   console.log("Q 3 (c)-->  Invoke the same arrow function ");
   let additionOfStr = (fStr,sStr,tStr,forStr,fifStr) => {
       let addOfStr=fStr+sStr+tStr+forStr+fifStr;
       console.log("Addition of numbers  " + addOfStr);
      }
      additionOfStr("I am","learning","ES6","fetures","in depth");