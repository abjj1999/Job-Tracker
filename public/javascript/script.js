// const moment = require('moment');

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



// $("#date").on("change", function(e) {
//     var date = $(this).val();

//     var e = moment()
//     var b = moment(date, "mm/dd/yyyy");

//     var months = e.diff(b, "months");
//     var option = $("")
// })
