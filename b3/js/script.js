$(function () {

    //슬라이드 메뉴
    $('nav > ul > li').mouseover(function () {
        $(this).find('.sub').stop().slideDown();
    });
    $('nav > ul > li').mouseout(function () {
        $(this).find('.sub').stop().slideUp();
    });

    // //상하 슬라이드
    let i = 0;
    $('.slider').append($('.slide').first().clone(true));

    setInterval(function () {
        i++;
        $('.slider').animate({ top: -100 * i + "%" }, 1000);

        if (i == 3) {
            setTimeout(function () {
                $('.slider').animate({ top: 0 }, 0);
                i = 0;
            }, 800);
        }

    }, 3000);

    //모달 팝업
    $('.popup_open').click(function () {
        $('.popup').show();
    });
    $('button').click(function () {
        $('.popup').hide();
    });

});
