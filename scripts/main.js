$(document).ready(function(){
    //подключение слайдер ренджа из библиотеки jq ui
    $( function() {
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 999,
            values: [ 0, 999 ],
            slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
            $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
            " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    });

    //Функция меню "гармошки"
    $(".accordion p:first").addClass("active");
    $(".accordion div:not(:first)").hide();
 
    $(".accordion h3").click(function(){
 
        $(this).next("div").slideToggle("slow")
        .siblings("div:visible").slideUp("slow");
        $(".accordion h3").find("p").removeClass("active");
        $(this).find("p").addClass("active");
    });

    //плавный переход по якорю
    $(".br-line").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    //бработка кнопок отображения блоками или списком
    $(".button-block").click(function(){
        $(".shop-box").addClass("resize-list");
        $(".button-block").addClass("button-block-active");
        $(".button-list").removeClass("button-list-active");
    });

    $(".button-list").click(function(){
        $(".shop-box").removeClass("resize-list");
        $(".button-block").removeClass("button-block-active");
        $(".button-list").addClass("button-list-active");
    });
});