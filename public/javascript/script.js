$(document).foundation();

document.querySelector("#createButton").addEventListener("click", function() {
    document.querySelector("#modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function() {
    document.querySelector("#modal").style.display = "none";
});