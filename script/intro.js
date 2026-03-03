jQuery(document).ready(function () {

    $(".nav > ul > li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown();
    });

    $(".nav > ul > li").mouseout(function () {
        $(this).find(".submenu").stop().slideUp();
    });

    //마우스 오버 시
    $(".btn1").mouseover(function () {
        $(".btn1").attr("src", "./img/sec_btn1_on.png");
    });
    $(".btn1").mouseout(function () {
        $(".btn1").attr("src", "./img/sec_btn1.png");
    });

    $(".btn2").mouseover(function () {
        $(".btn2").attr("src", "./img/sec_btn2_on.png");
    });
    $(".btn2").mouseout(function () {
        $(".btn2").attr("src", "./img/sec_btn2.png");
    });

    $(".btn3").mouseover(function () {
        $(".btn3").attr("src", "./img/sec_btn3_on.png");
    });
    $(".btn3").mouseout(function () {
        $(".btn3").attr("src", "./img/sec_btn3.png");
    });

    $(".con2").children("div:gt(0)").hide();

    $(".btn1").click(function () {
        $(".con2").children("div:gt(0)").hide();
        $(".con2").children("div:eq(0)").show();
    });
    $(".btn2").click(function () {
        $(".con2").children("div:eq(0)").hide();
        $(".con2").children("div:eq(2)").hide();
        $(".con2").children("div:eq(1)").show();
    });
    $(".btn3").click(function () {
        $(".con2").children("div:eq(0)").hide();
        $(".con2").children("div:eq(1)").hide();
        $(".con2").children("div:eq(2)").show();
    });
});

