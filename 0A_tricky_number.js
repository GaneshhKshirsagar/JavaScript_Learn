// count total number of owels using includes() for string
var str="I am very good in IT"
var owellower="aeiou";
var owelupper="AEIOU";
var owelcount=0;
for (let index = 0; index < str.length; index++) {
    var char= str.charAt(index)
    var str1=str.includes(owellower);
    var str2=str.includes(owelupper);
    if (char==owellower || char== owelupper) {
        ++owelcount;
        
    }
    console.log(owelcount);    
}

// Write a function to get the sum of cube of numbers form 1 to 5

//  var add=0
// for (let num=1; num<=5; num++) {
//     var temp=num*num*num;
//     add=add+temp;
    
// }
// console.log("Q-2 Ans:- Please find the cube of 1 to 5 numbers = "+add);

// // odd position charactor

// function oddPositionedChars(str) {
//     for (let index = 0; index < str.length; index++) {
//         console.log(str.charAt(index));
//         var chara=str.charAt(index);
//         if (index%2!=0 && chara!=" ") {

//             var strres=str.charAt(index);
//         }
//     }
//     }
    
// oddPositionedChars("Hardwork always pay back");