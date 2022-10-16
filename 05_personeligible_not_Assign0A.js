function voteEligible(arg1, arg2, arg3, arg4) {
    if (arg1 > 18) {
        console.log(`${arg1} is eligible for vote`);
    } else {
        console.log(`${arg1} is not eligible for vote`);
    }
    if (arg2 > 18) {
        console.log(`${arg2} is eligible for vote`);
    } else {
        console.log(`${arg2} is not eligible for vote`);
    }
    if (arg3 > 18) {
        console.log(`${arg3} is eligible for vote`);
    } else {
        console.log(`${arg3} is not eligible for vote`);
    }
    if (arg4 > 18) {
        console.log(`${arg4} is eligible for vote`);
    } else {
        console.log(`${arg4} is not eligible for vote`);
    }
}
voteEligible(18, 20, 17, 40);

// Check if string contains more than 1o charactors or not

function strinLenth(str) {
    var out = str.length;
    console.log("Lenth of string = " + out);
}
var totalLen = strinLenth("JavaScript-ES6");

// check if string starts with "Java" Ex--> "JavaScript Janguage"

function firstChar(startEle) {
    if (startEle[0]="Java") 
    {
        console.log("String start with Java");
    }
    else{
        console.log("String not start with Java");
    }
}
firstChar("Java Script Programming Language");

//05_ternary_opr_0AAssign.js


function maleMarriageEligibility(gender,age,boyName) {
   var out = age>21
   ? `Hey ${boyName} you are eligible for marriage`
   : "you are not eligible for marriage";
    console.log(out);
}
maleMarriageEligibility("Male",25,"Billgates");

// Not eligible criateria

function maleMarriageEligibility1(gender,age,boyName) {
    var print = age<21

    ? `Hey ${boyName} you are not eligible for marriage`
    : "you are eligible for marriage";
console.log(print);
}
maleMarriageEligibility1("Male",17,"Stev Jobs");

// if else

function fun1(gender,age,girlName) {
   
}
function femaleMarriageEligibility(gender, age, girlName) {
    if( gender == "Female" && age>=18)
    {
        console.log(`Hey ${girlName} you are eligible for marriage`);
    }
    else
    {
        console.log(`Hey ${girlName} you are not eligible for marriage`);
    }
}
femaleMarriageEligibility("Female", 17 , "Jenifer");
femaleMarriageEligibility("Female", 27 , "Milindra Gates");

//If else statements

function femaleMarriageEligibility (gender,age,girlName){
    if (age>18) {
        console.log(`Hey ${girlName} you are eligible for marriage`)
    }
    else
        console.log(`Hey ${girlName} not eligible for marriage`)
    

}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Milinda Gates");
