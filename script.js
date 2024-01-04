var display = 1;
var display1 = 1;
let Mediathek = document.getElementById("media");

function hideShow() {
    if(display == 1) {
        document.getElementById("media").style.display = "block";
        display = 0;
    }
    else
    {
        document.getElementById("media").style.display = "none";
        display = 1;
    }
}