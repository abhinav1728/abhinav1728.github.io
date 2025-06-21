






$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing animation
    var typed = new Typed(".typing", {
        strings: ["Machine Learning Engineer", "Backend Developer", "Freelancer", "Data Analyst"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Machine Learning Engineer", "Backend Developer", "Freelancer", "Data Analyst"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl Carousel (if used elsewhere)
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    $('#hireMeBtn').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 800);
    });

    // Optional: Enable mouse wheel horizontal scroll for projects section
    const scrollContainer = document.querySelector(".horizontal-scroll");
    if (scrollContainer) {
        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
        });
    }
});



























