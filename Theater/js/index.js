// const panel = document.getElementsByClassName('.navbar')[0];
// window.addEventListener('scroll', function () {
//     if (pageYOffset > 100) {
//         panel.classList.add('navbar-active');
//     } else {
//         panel.classList.remove('navbar-active');
//     }
// });

$(document).ready(function () {
    $(window).scroll(function () {
        if (pageYOffset > 100) {
            $('.navbar').addClass('navbar-active');
        } else {
            $('.navbar').removeClass('navbar-active');
        }
    });
});

// $(document).ready(function () {
//     $('.navbar__burger').click(function (event) {
//         $('.navbar__burger, .navbar__menu').toggleClass('active');
//         $('body').toggleClass('lock');
//     });
// });
;
