
$(document).ready(function () {
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
        .css("justify-content", "center")
        .css("box-sizing", "border-box")
        .css("padding", "0 20px")
        .css("width", "90%")

    $("#header-content h1")
        .css("color", "white")
        .css("float", "left")
        .css("margin", "0")


    // *** CONTENT ***
    // content
    $("#content")
        .css("display", "flex")
        .css("justify-content", "center")
        .css("margin", "50px")

    $(".card div")
        .css("display", "flex")
        .css("justify-content", "center")
        .css("font-weight", "bolder")

    $("#content form")
        .css("display", "flex")
        .css("align-items", "center")
        .css("flex-flow", "column")
        .css("padding", "7px 0")

    $("#content input")
        .css("margin", "10px")
        .css("width", "75%")

    $("#content button")
        .css("display", "flex")
        .css("align-items", "center")
        .css("justify-content", "center")
        .css("width", "50%")
        .css("height", "30px")
        .css("border-radius", "6px")
});