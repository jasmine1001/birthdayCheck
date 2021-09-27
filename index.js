const dateOfBirth =document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberbtn = document.querySelector("#check-number");


const output = document.querySelector("#output");

function compareVal(sum, luckyNumber){
if(sum%luckyNumber===0){
    output.value="hurrahhh! Your birthday is lucky 😊";
} else{
    output.value="OhhNoo! Your birthday is not lucky 😔";
}
}

function checkbdIsLucky(){
    const bdate = dateOfBirth.value;
    const sum = calcSum(bdate)
    // console.log(sum);
    compareVal(sum,luckyNumber.value);
}



function calcSum(bdate){
bdate = bdate.replaceAll("-","");
let sum = 0;
for(let i=0; i<bdate.length; i++){
    sum = sum + Number(bdate.charAt(i));
}
return sum;
}

checkNumberbtn.addEventListener('click', checkbdIsLucky);