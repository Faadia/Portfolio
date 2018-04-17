function myFunction() {
    var x = document.getElementById("mini-icon");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}