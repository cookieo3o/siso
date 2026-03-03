jQuery(document).ready(function () {

    $(".nav > ul > li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown();
    });

    $(".nav > ul > li").mouseout(function () {
        $(this).find(".submenu").stop().slideUp();
    });

    //마우스 오버 시
    $(".join > a > img").mouseover(function () {
        $(".join > a > img").attr("src", "./img/join_btn_on.png");
    });
    $(".join > a > img").mouseout(function () {
        $(".join > a > img").attr("src", "./img/join_btn.png");
    });

});

