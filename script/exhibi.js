jQuery(document).ready(function () {

    $(".nav > ul > li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown();
    });

    $(".nav > ul > li").mouseout(function () {
        $(this).find(".submenu").stop().slideUp();
    });

    //마우스 오버 시
    $(".b1").mouseover(function () {
        $(".b1 img").attr("src", "./img/btn_ex01_on.png");
    });
    $(".b1").mouseout(function () {
        $(".b1 img").attr("src", "./img/btn_ex01.png");
    });
    $(".b2").mouseover(function () {
        $(".b2 img").attr("src", "./img/btn_ex02_on.png");
    });
    $(".b2").mouseout(function () {
        $(".b2 img").attr("src", "./img/btn_ex02.png");
    });

});

