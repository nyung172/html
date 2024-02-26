$(function () {

    //슬라이드 메뉴
    $('nav > ul > li').mouseover(function () {
        $('.sub, .bg').stop().slideDown();
    });
    $('nav > ul > li').mouseout(function () {
        $('.sub, .bg').stop().slideUp();
    });

    //좌우슬라이드
    let i = 0;
    $('.slider').append($('.slide').first().clone(true));

    setInterval(function () {

        i++;
        $('.slider').animate({ marginLeft: -100 * i + "%" }, 1000);

        if (i == 3) {
            setTimeout(function () {
                $('.slider').animate({ marginLeft: 0 }, 0)
                i = 0;
            }, 800);
        }

    }, 3000);

    //탭메뉴
    let t;
    $('.tab > h2 > a').click(function () {
        $('.tab > h2 > a').removeClass('on');
        $(this).addClass('on');
        t = $(this).index();
        $('.tabcon').hide();
        $('.tabcon').eq(t).show();
        return false;
    });

    //모달 팝업
    $('.popup_open').click(function () {
        $('.popup').show();
    });
    $('button').click(function () {
        $('.popup').hide();
    });

});