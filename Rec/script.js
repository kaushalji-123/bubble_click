// document.addEventListener("DOMContentLoaded", function () {
    var rec = document.querySelector("#center");
    rec.addEventListener("mouseover", function (details) {
        var rectangleLoc = rec.getBoundingClientRect();
        var insiderecval = details.clientX - rectangleLoc.left;
        if( insiderecval< rectangleLoc.width/2 ){
            console.log("left");
        } else{
            console.log("right");
        }
    });
// });
