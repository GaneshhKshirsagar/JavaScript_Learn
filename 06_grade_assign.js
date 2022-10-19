// Score less than 35 then log msg "You are failed"
function gradesySystem(score) {
if(score<35){
        console.log("You are failed your score is less than 35");
    }
}
gradesySystem(30);

// Score more than equal to 35 then log msg "You are passed"

function gradesySystem2(score2) {

    if(score2>=35){
        console.log("You are passed more than 35");
    }
    else{
        console.log("you are failed");
    }
}
gradesySystem2(50);
// Score is greatter than to 35 ans less than 60 log msg passedand grade "C"

function gradesySystem3(score3) {
    if(score3>=35 && score3<60){
        console.log("You are passed grade C");
    }
    else{
        console.log("you are failed");
    }
}
gradesySystem3(55);

// Score is greatter than to 60 ans less than 75 log msg passedand grade "B"

function gradesySystem4(score4) {
    if(score4>=60 && score4<75){
        console.log("You are passed grade B");
    }
    else{
        console.log("you are failed");
    }
}
gradesySystem4(67);

// Score is greatter than to 75 ans less than 90 log msg passedand grade "A"

function gradesySystem4(score4) {
    if(score4>=75 && score4<90){
        console.log("You are passed grade A");
    }
    else{
        console.log("you are failed");
    }
}
gradesySystem4(78);

// Score is greatter than to 90 and equal to 100 than  log msg passedand grade "A+"

function gradesySystem5(score5) {
    if(score5>=90 && score5<100){
        console.log("You are passed grade A+");
    }
    else{
        console.log("you are failed");
    }
}
gradesySystem5(91);

//log message invalid input on console for unhappy path scanarios.

function gradesySystem6(score6) {
    if(score6>0){
            console.log("Input withine the range");
        }
        else
        {
            console.log("Invalid score like -ve");
        }
    }
    gradesySystem6(-2);
    
    //log message invalid input on console invalid input in string formate.
    function gradesySystem7(score7) {
        if(score7 != ""){
                console.log("This is invalid input is String");
            }
        }
        gradesySystem7("You are looking js");

   //log message invalid input null Or undefined

   function gradesySystem8(score8) {
    if(score8==1){
            console.log("This is One");
        }
        else
        {
            console.log("This is undefined");
        }
    }
    gradesySystem8("");