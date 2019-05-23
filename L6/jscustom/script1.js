
$(document).ready(function () {
    var hr = $("#hr").text();
    var min = $("#min").text();
    var n = 60;
    for(var i = 0; i < n; i++){
       Timer(sec);
    }


});

function Timer(sec) {
    var sec = $("#sec").text();
    setTimeout(function () {
        sec = sec - 1;
        $("#sec").text(sec);
    }, 1000);
}