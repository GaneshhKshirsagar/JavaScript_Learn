// Q-1)Write any two functions with no arguments and no return type as per your choice and log message on console
function noArgFunction(){
    console.log("Q 1 Ans -->"+ "  This is example of no parameter and no retun type function");
}
noArgFunction();

// Q-2) Write a functions with arguments namely firstName, lastName and concat this two agruments and log on
//console inside a function
function explConcateStr(firstName,lastName){
    console.log("Q 2 Ans -->"+"  " +firstName + lastName);
}
explConcateStr("Ganesh","Kshirsagar");
// Q-3) Write a function with two args and should swap the passed values and log on console before swap
//and after swap values inside funtions self.
function swap_values(name1,name2){
    console.log("Q 3 Ans -->");
    console.log("         Before swap the values");
    console.log("           " +name1,name2);
    var temp;
    temp=name1;
    name1=name2;
    name2=temp;
    console.log("         After swap the values");
    console.log("           " +name1,name2);
} 
swap_values("Ganesh","Kshirsagar");

function swap_num(num1,num2){
    console.log("Q 4 Ans -->");
    console.log("         Before swap the values");
    console.log("           " +num1,num2);
    var temp;
    temp=num1;
    num1=num2;
    num2=temp;
    console.log("         After swap the values");
    console.log("           " +num1,num2);
}
swap_num(1000,2000);


// Q-5 with three parameter or arguments and it should return the addition 
function add_three_number(a,b,c)
{
    d=a+b+c;
    return d;
}
console.log("Q 5 Ans -->");
var d= add_three_number(10.26, 600, 400);
console.log("Addition of three numbers -->  " + d);
// Q6- Invoke the same function values "Hello" "Good" "Morning"
function joinStr(fName,sName,tName)
{
   res=fName+sName+tName;
   return res;
}
var res= joinStr("Hello", "Good", "Morning");
console.log(" Q-6 Ans-->  "+res);
