jQuery(document).ready(function () {

    $(".nav > ul > li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown();
    });

    $(".nav > ul > li").mouseout(function () {
        $(this).find(".submenu").stop().slideUp();
    });

    //마우스 오버 시
    $(".con2 >a > .img1").mouseover(function () {
        $(".con2 >a > .img1").attr("src", "./img/slide_cont_img1_on.png");
    });
    $(".con2 >a > .img1").mouseout(function () {
        $(".con2 >a > .img1").attr("src", "./img/slide_cont_img1.png");
    });

    $(".con2 >a > .img2").mouseover(function () {
        $(".con2 >a > .img2").attr("src", "./img/slide_cont_img2_on.png");
    });
    $(".con2 > a > .img2").mouseout(function () {
        $(".con2 > a > .img2").attr("src", "./img/slide_cont_img2.png");
    });

    $(".con2 > a > .img3").mouseover(function () {
        $(".con2 > a > .img3").attr("src", "./img/slide_cont_img3_on.png");
    });
    $(".con2 > a > .img3").mouseout(function () {
        $(".con2 > a > .img3").attr("src", "./img/slide_cont_img3.png");
    });

    $(".con2 > a > .img4").mouseover(function () {
        $(".con2 > a > .img4").attr("src", "./img/slide_cont_img4_on.png");
    });
    $(".con2 > a > .img4").mouseout(function () {
        $(".con2 > a > .img4").attr("src", "./img/slide_cont_img4.png");
    });

    $(".con2 > a > .img5").mouseover(function () {
        $(".con2 > a > .img5").attr("src", "./img/slide_cont_img5_on.png");
    });
    $(".con2 > a > .img5").mouseout(function () {
        $(".con2 > a > .img5").attr("src", "./img/slide_cont_img5.png");
    });

    $(".con2 > a > .img6").mouseover(function () {
        $(".con2 > a > .img6").attr("src", "./img/slide_cont_img6_on.png");
    });
    $(".con2 > a > .img6").mouseout(function () {
        $(".con2 > a > .img6").attr("src", "./img/slide_cont_img6.png");
    });

//슬라이드
var index = 0;

$(".right_btn").click(function () {

    if (index < 3) {
        $(".right_btn").removeClass("none");
        $(".left_btn").removeClass("none");    
        index++;
    }
    
    else{
        $(".right_btn").addClass("none");
    }

    if  (index == 3) { 
        $(".right_btn").addClass("none");
    }

        var position = index * (-1920) + "px";
        $(".imglist").animate({left: position}, 500); 


});


$(".left_btn").click(function () {
   
    if (0 < index &&index < 4 ) {    
        $(".left_btn").removeClass("none");     
        $(".right_btn").removeClass("none");
        index --;
    }

    else if ( index == 0){ 
        $(".left_btn").addClass("none");

    }

    if ( index == 0){ 
        $(".left_btn").addClass("none");

    }
        var place = index * (-1920) + "px";
        $(".imglist").animate({left: place}, 500);
     

});


});