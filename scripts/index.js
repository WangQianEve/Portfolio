window.addEventListener("scroll", function(e) {
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    console.log(scrollPercentage);
    let font_size = 5 + scrollPercentage * 20;
    $("#clip_q text").css("font-size", font_size+"vw");
});