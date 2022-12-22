function display(num){
    let displayScreen = document.getElementById("calc-display");
    displayScreen.value += num;
}
function Clear(){
    let displayScreen = document.getElementById("calc-display");
    displayScreen.value = "";
}
function calculate(){
    let displayScreen = document.getElementById("calc-display");
    try{
        displayScreen.value = eval(displayScreen.value);
    }
    catch(err){
        alert("Invalid")
    }
}
function del(){
    let displayScreen = document.getElementById("calc-display");
    displayScreen.value = displayScreen.value.slice(0,-1);
}

