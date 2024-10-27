const button = document.getElementById("button")
const header = document.getElementById("header")

button.addEventListener("click", function() {
    console.log("You clicked the button!");

    header.textContent = "You clicked the button!";
});