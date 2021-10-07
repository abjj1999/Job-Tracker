

$(document).foundation();

document.querySelector("#createButton").addEventListener("click", function() {
    document.querySelector("#modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function() {
    document.querySelector("#modal").style.display = "none";
});

var today = moment().format("mm/dd/yyy");


    $(".datepicker").datepicker({
        format: "mm/dd/yyyy",
        todayBtn: true,
        todayHighlight: true
    });

    $(".today").text(today)


