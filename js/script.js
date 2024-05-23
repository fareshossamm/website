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
            $("html, body").animate({ scrollTop: $("#education").offset().top }, "slow");



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
            $("html, body").animate({ scrollBottom: $("#education").offset().top }, "slow");


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
            $("html, body").animate({ scrollTop: $("#education").offset().top }, "slow");

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
            $("html, body").animate({ scrollTop: $("#education").offset().top }, "slow");

        });

    });
    //#########################################################################

