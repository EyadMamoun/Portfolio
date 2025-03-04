$(window).scroll(function(){
    let windowScroll = $(window).scrollTop();
    let aboutTop = $("#ABOUT").offset().top;
    if(windowScroll >= aboutTop)
    {
        $("nav").css("backgroundColor","rgba(0, 0, 0, 0.7)");
        $("#upBtn").fadeIn(500);
    }
    else
    {
        $("nav").css("backgroundColor","transparent");
        $("#upBtn").fadeOut(500);
    }
});

$("a[href^='#']").click(function(eventInfo){
    let aHref = $(eventInfo.target).attr('href');
    let aboutTop = $(aHref).offset().top;
    $("html,body").animate({scrollTop:aboutTop},1000);
})

$("form").submit(function(e) {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    $(this).trigger("reset");
});

