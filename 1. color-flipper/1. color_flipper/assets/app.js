
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// write functionality to button
const btn = document.getElementById("btn");
// do the same for the color
const color = document.querySelector(".color");

// add event listener
// listen for a 'click' then we will target the <body>  and change the backround colour property
btn.addEventListener("click", function(){
const  randomNumber = getRandNum();
// checking if we in fact generate a random number
console.log(randomNumber);
// targeting the document.body and changin the backround color
document.body.style.backgroundColor = colors[randomNumber]
color.textContent = colors[randomNumber]
});

// genrating a random number
getRandNum = () => {
    return Math.floor(Math.random() * colors.length);
}