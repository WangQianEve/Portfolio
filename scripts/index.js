var clip = true;
window.onload = function() {
    $('#main').css("clip-path", "url(#clip_q)");
};
window.addEventListener("scroll", function(e) {
    let scrollPercentage = document.documentElement.scrollTop / (0.5 * document.documentElement.clientHeight);
    if (scrollPercentage >= 1 && clip) {
        clip = false;
        $("#main").css("clip-path", "");
        return;
    }
    if (scrollPercentage <= 1 && !clip) {
        clip = true;
        $('#main').css("clip-path", "url(#clip_q)");
        return;
    }
    // console.log(scrollPercentage);
    let font_size = 5 + scrollPercentage * 800;
    let y = 33 + scrollPercentage * 50;
    $("#clip_q text").css("font-size", font_size+"vw");
    $("#clip_q text").attr("y", y+"vw");
});

$('body').scrollspy({
    target: '.bs-docs-sidebar',
    offset: 40
});
$("#sidebar").affix({
    offset: {
        top: 60
    }
});