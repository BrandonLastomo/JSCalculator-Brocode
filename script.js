const display = document.getElementById("display");

function addToDisplay(key){
    display.value += key;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}