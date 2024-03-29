$(document).ready(function () {

    $("#bar").click(function () {

        $("nav ul").css("right", " -100px");

    });
    $("#close").click(function () {

        $("nav ul").css({
            "right": "-3000px",
            "transition": "right 0.7s ease-in-out"
        });
    });
    $("li").click(function () {

        $("nav ul").css("right", " -3000px");

    });
    $("#sign").click(function () {

        $("nav ul").css("right", " -3000px");

    });

});
//#########################################################################

$(document).ready(function () {
    $("#education").hide();
    $("#skills").hide();
    $("#links").hide();
    $("#personal").show();
    $(".personal").css("color", "dodgerblue");
    $(".personal").click(function () {

        $("#education").hide();
        $("#links").hide();
        $("#skills").hide();
        $("#personal").slideDown(3000);
        $(".personal").css("color", "dodgerblue");
        $(".education").css("color", "aliceblue");
        $(".links").css("color", "aliceblue");
        $(".skills").css("color", "aliceblue");



    });
    $(".education").click(function () {

        $("#personal").hide();
        $("#links").hide();
        $("#skills").hide();
        $("#education").slideDown(3000);
        $(".personal").css("color", "aliceblue");
        $(".education").css("color", "dodgerblue");
        $(".links").css("color", "aliceblue");
        $(".skills").css("color", "aliceblue");

    });
    $(".links").click(function () {
        $("#personal").hide();
        $("#education").hide();
        $("#skills").hide();
        $("#links").slideDown(3000);
        $(".personal").css("color", "aliceblue");
        $(".education").css("color", "aliceblue");
        $(".links").css("color", "dodgerblue");
        $(".skills").css("color", "aliceblue");

    });

    $(".skills").click(function () {

        $("#education").hide();
        $("#skills").slideDown(3000)
        $("#links").hide();
        $("#personal").hide();
        $(".skills").css("color", "dodgerblue");
        $(".personal").css("color", "aliceblue");
        $(".education").css("color", "aliceblue");
        $(".links").css("color", "aliceblue");
    });

});
//#########################################################################

document.addEventListener('DOMContentLoaded', function() {
    var nameInput = document.getElementById('name');
    var mailInput = document.getElementById('mail');
    var messageInput = document.getElementById('message');

    nameInput.addEventListener('keyup', function() {
        hideErrorMessage('nameError');
    });

    mailInput.addEventListener('keyup', function() {
        hideErrorMessage('emailError');
    });

    messageInput.addEventListener('keyup', function() {
        hideErrorMessage('messageError');
    });
});

function hideErrorMessage(elementId) {
    var errorElement = document.getElementById(elementId);
    errorElement.style.display = 'none';
}

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('mail').value;
    var message = document.getElementById('message').value;
    var isValid = true;

    // Reset error messages
    document.getElementById('nameError').innerText = "";
    document.getElementById('emailError').innerText = "";
    document.getElementById('messageError').innerText = "";

    if (name == "") {
        document.getElementById('nameError').innerText = "Please enter your name";
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    if (email == "") {
        document.getElementById('emailError').innerText = "Please enter your email address";
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').innerText = "Please enter a valid email address";
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    if (message == "") {
        document.getElementById('messageError').innerText = "Please enter your message";
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    // Regular expression to check if the email is valid
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}