
$(document).ready(function() {
    // *** HEADER ***
    // header
    $("header")
        .css("display", "flex")
        .css("justify-content", "center")

    $("#header-content")
        .css("background-color", "green")
        .css("height", "120px")
        .css("width", "100%")
        .css("display", "flex")
        .css("align-items", "center")
        .css("box-sizing", "border-box")
        .css("padding", "0 20px")
        .css("width", "90%")
    
    $("#brand")
        .css("display", "flex")
        .css("align-items", "center")
        .css("justify-content", "flex-start")
        .css("width", "15%")

    $ ("#header-content h1")
        .css("color", "white")
        .css("float", "left")
        .css("margin", "0")

    $("#header-content nav")
        .css("display", "flex")
        .css("justify-content", "flex-end")
        .css("align-items", "center")
        .css("width", "85%")
    
    $("#header-content a")
        .css("color", "white")
        .css("text-decoration", "none")
        .css("font-size", "1.3rem")
});
