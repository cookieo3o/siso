jQuery(document).ready(function () {

    var index3 = 0;

    setInterval(function () {
        if (index3 < 2) {
             index3++;
        }
        else {
             index3 = 0;
        }

        console.log(index3);
        position = index3 * (-1920) + "px";

        $(".eventslide").animate({ left: postion }, 100)
    }, 3000);

    index4 = 0;

    $(".Arrow6").click(function () {
        index4++;
        $(".stylelab1 > a > img").attr("src", "img/" + ((index4) % 5) + ".png")
        $(".stylelab2 > a > img").attr("src", "img/" + ((index4 + 1) % 5) + ".png")
        $(".stylelab3 > a > img").attr("src", "img/" + ((index4 + 2) % 5) + ".png")
        $(".stylelab4 > a > img").attr("src", "img/" + ((index4 + 3) % 5) + ".png")
        $(".stylelab5 > a > img").attr("src", "img/" + ((index4 + 4) % 5) + ".png")
    });

});