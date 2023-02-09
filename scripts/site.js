$(function() {
    SetupNavBar();
    $("#year").text(new Date().getFullYear());
});

function SetupNavBar() {
    $(".nav-link")
        .mouseover(function() {
            $(this).addClass("nav-link-hover");
        })
        .mouseout(function() {
            $(this).removeClass("nav-link-hover");
        });

    var page = window.location.pathname.split('?')[0].split('/').slice(-1)[0].toLowerCase();

    if (page == '') {
        page = 'index';
    }

    var selectedNav = $('.nav-link > a[href$="' + page + '"]').parent();
    selectedNav.removeClass("nav-link");
    selectedNav.addClass("nav-link-selected");
}