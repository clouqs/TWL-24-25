// if statements 
/*

let age = 25;
if(age >= 18){
    console.log("You are an adult");
}
else{
    console.log("You are a minor");
}

//--------------------------------------//

let isStudent = false;
if(isStudent){
    console.log("You are a student");
}
else{
    console.log("You are NOT a student");
}

*/
//--------------------------------------//

document.getElementById("check").onclick = function (){
    let age = document.getElementById("age").value; // Define age within the function scope
    if(age >= 18){
        alert ("You are an adult");
    }
    else{
         alert("You are a minor");
    }
}
