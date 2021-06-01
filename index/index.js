$(function() {
    $(".sec01").vegas({
        slides: [
            { src: './index/images/세종점베너.jpg', delay: 3500 },
            { src: './index/images/tararosa.png', delay: 3500 },
            { src: './index/images/테라로사제주.png', delay: 3500 }
        ],
        transition: 'fade',
        animation: 'kenburns'
    });
    $(".sec02").vegas({
        slides: [
            { src: './index/images/audimain.png', delay: 3500 },
            { src: './index/images/audi.png', delay: 3500 },
            { src: './index/images/audisec2.png', delay: 3500 }
        ],
        transition: 'fade',
        animation: 'kenburns'
    });

    var spot1 = $("header").offset().top;
    var spot2 = $(".sec01").offset().top;
    var spot3 = $("footer").offset().top;
    $("#p1").click(function(){
        $("html, body").animate({
            scrollTop: spot1
        },500);
    });
    $("#p2").click(function(){
        $("html, body").animate({
            scrollTop: spot2
        },500);
    });
    $("#p3").click(function(){
        $("html, body").animate({
            scrollTop: spot3
        },500);
    });
});