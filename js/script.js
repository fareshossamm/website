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
        $(".personal").css("color", "#03e2ee");
        $(".personal").click(function () {

            $("#education").hide();
            $("#links").hide();
            $("#skills").hide();
            $("#personal").slideDown(3000);
            $(".personal").css("color", "#03e2ee");
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
            $(".education").css("color", "#03e2ee");
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
            $(".links").css("color", "#03e2ee");
            $(".skills").css("color", "aliceblue");

        });

        $(".skills").click(function () {

            $("#education").hide();
            $("#skills").slideDown(3000)
            $("#links").hide();
            $("#personal").hide();
            $(".skills").css("color", "#03e2ee");
            $(".personal").css("color", "aliceblue");
            $(".education").css("color", "aliceblue");
            $(".links").css("color", "aliceblue");

        });

    });
    //#########################################################################
    document.addEventListener('DOMContentLoaded', function () {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const cards = document.querySelectorAll('.card');
      
        filterButtons.forEach(button => {
          button.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');
            
            cards.forEach(card => {
              if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = '';
              } else {
                card.style.display = 'none';
              }
            });
          });
        });
      });
      