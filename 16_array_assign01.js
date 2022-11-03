
//give the array remove duplicate names and array of console after removing duplicate element
console.log("=======Q 1 give the arrayOfNames============");
const arraOfName=['kamat', 'memon','nashpati','taimur','menon','kamat','andy','taimur'];
console.log(arraOfName);
console.log("===========Q 1  Remove duplicate names and array of console after removing duplicate element============");
function removeduplcate(arraOfName) {
    return [...new Set(arraOfName)];
}
console.log("===========Q 2 how many removed element=========");  
var arrlenght=arraOfName.length;
var uniquele=removeduplcate(arraOfName);
console.log(arrlenght-uniquele.length);

console.log("===========Q 3 log the total number count unique element after removin element=========");  
var uniquele=removeduplcate(arraOfName);
console.log(uniquele.length);