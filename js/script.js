document.addEventListener('DOMContentLoaded', function () {
    // Navigation bar functionality
    document.getElementById('bar').addEventListener('click', function () {
        document.querySelector('nav ul').style.right = '-100px';
    });

    document.getElementById('close').addEventListener('click', function () {
        let navUl = document.querySelector('nav ul');
        navUl.style.right = '-3000px';
        navUl.style.transition = 'right 0.7s ease-in-out';
    });

    document.querySelectorAll('li, #sign').forEach(function (element) {
        element.addEventListener('click', function () {
            document.querySelector('nav ul').style.right = '-3000px';
        });
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
