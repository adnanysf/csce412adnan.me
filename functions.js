function toggleStyleSheet(){
    // Task 1
    // Steps
    var style = document.getElementsByClassName("stylesheet")[0];

    var currStyleSheet = style.getAttribute("href");

    var newStyle;
    if (currStyleSheet == "style.css"){
        newStyle = 'altstyle.css'
    }
    else{
        newStyle = 'style.css'
    }

    style.setAttribute("href", newStyle);

    localStorage.setItem("selectedStylesheet", newStyle);
}


window.onload = function() {

    var selectedStylesheet = localStorage.getItem("selectedStylesheet");
    if (selectedStylesheet) {
        var style = document.getElementsByClassName("stylesheet")[0];
        style.setAttribute("href", selectedStylesheet);
    }
}