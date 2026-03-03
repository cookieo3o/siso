jQuery(document).ready(function () {

    $(".nav > ul > li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown();
    });

    $(".nav > ul > li").mouseout(function () {
        $(this).find(".submenu").stop().slideUp();
    });


    $(".slideimg").children("div:gt(0)").hide();
    var index = 0;
    setInterval(function () {
        var next = (index + 1) % 2;
        $(".slideimg").find("div").eq(index).fadeOut(2000);
        $(".slideimg").find("div").eq(next).fadeIn(2000);
        index = next;
    }, 4000);

    $(".co1").children("img:gt(0)").hide();
    $(".co2").find("img:gt(0)").hide();
    $(".num").children("img:gt(0)").hide();


    //오른쪽, 왼쪽 슬라이드 버튼 시작

    var index2 = 0;
    var next2 = 0;

    //오른쪽 버튼
    $(".right").click(function () {
        if (next2 == 2) {

        }

        else if (next2 == 1) {
            $(".right > a > img").attr("src", "./img/tri_0.png");
            $(".left > a > img").attr("src", "./img/tri_left.png");

            next2 = (index2 + 1);
            $(".co1").find("img").eq(index2).fadeOut();
            $(".co1").find("img").eq(next2).fadeIn();
            $(".co2").find("img").eq(index2).fadeOut();
            $(".co2").find("img").eq(next2).fadeIn();
            $(".num").find("img").eq(index2).fadeOut();
            $(".num").find("img").eq(next2).fadeIn();
            index2 = next2;
        }

        else {
            $(".right > a > img").attr("src", "./img/tri_right.png");
            $(".left > a > img").attr("src", "./img/tri_left.png");

            next2 = (index2 + 1);
            $(".co1").find("img").eq(index2).fadeOut();
            $(".co1").find("img").eq(next2).fadeIn();
            $(".co2").find("img").eq(index2).fadeOut();
            $(".co2").find("img").eq(next2).fadeIn();
            $(".num").find("img").eq(index2).fadeOut();
            $(".num").find("img").eq(next2).fadeIn();
            index2 = next2;
        }


    });

    //왼쪽 버튼
    $(".left").click(function () {
        if (index2 == 0) {

        }

        else if (next2 == 1) {
            $(".left > a > img").attr("src", "./img/tri_0.png");
            $(".right > a > img").attr("src", "./img/tri_right.png");

            next2 = (index2 - 1);
            $(".co1").find("img").eq(index2).fadeOut();
            $(".co1").find("img").eq(next2).fadeIn();
            $(".co2").find("img").eq(index2).fadeOut();
            $(".co2").find("img").eq(next2).fadeIn();
            $(".num").find("img").eq(index2).fadeOut();
            $(".num").find("img").eq(next2).fadeIn();
            index2 = next2;
        }

        else {
            $(".right > a > img").attr("src", "./img/tri_right.png");
            next2 = (index2 - 1);
            $(".co1").find("img").eq(index2).fadeOut();
            $(".co1").find("img").eq(next2).fadeIn();
            $(".co2").find("img").eq(index2).fadeOut();
            $(".co2").find("img").eq(next2).fadeIn();
            $(".num").find("img").eq(index2).fadeOut();
            $(".num").find("img").eq(next2).fadeIn();
            index2 = next2;
        }

    });
 
    $(".storebtn").mouseover(function () {
        $(".storebtn > a > img").attr("src", "./img/more_btn_on.png");
    });
    $(".storebtn").mouseout(function () {
        $(".storebtn > a > img").attr("src", "./img/more_btn.png");
    });

});

