// set initial count
let count = 0
// 1. select all the buttons
    // use query select all
    // use for each

const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

// use the forEach method. this requires a call back value as its input. 
// a call back value is a function

// rather than write three event listeners, we write one forEach function 
// which is essentially a for loop iterating through all the "btns"
btns.forEach(function (btn) {
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList
        console.log(styles);
        // now write if statements using the object method .contains to 
        // target the button of that name
        if(styles.contains("decrease")){
            count--;
        }else if(styles.contains("increase")) {
            count++
        }else{
            count = 0
        }
        if (count > 0) {
            value.style.color = "green"
        }else if (count < 0) {
            value.style.color = "red"
        }else{
            value.style.color = "black"
        }
        value.textContent = count;
        
    })
})