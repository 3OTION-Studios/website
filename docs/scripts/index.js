const button = document.getElementById("button")
const header = document.getElementById("header")

button.addEventListener("click", function() {
    header.textContent = "You clicked the button!"
});