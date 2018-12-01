let ratio;
let visible;
let transform_origin;

AOS.init();

window.onload = function() {
    if (document.documentElement.clientWidth <= 768) {
        return;
    }
    updateWelcome();
    initVisibility();
    window.addEventListener("scroll", function(e) {
        let vals = checkVisibility();
        let cont = vals[0];
        let scrollPercentage = vals[1];
        if (!cont) {return;}
        let scale = 1 + scrollPercentage * ratio;
        $('#welcome').css({"transform":"scale("+scale+")", "transform-origin":transform_origin.x+"px "+transform_origin.y+"px"});
    });
    window.addEventListener("resize", updateWelcome);
};

let updateWelcome = function () {
    let q = $('#q_svg');
    let q_pos = q.position();
    let q_size = {height: q.height(), width: q.width()};
    transform_origin = {x:q_pos.left+q_size.width*0.55, y:(q_pos.top+q_size.height*0.78)};
    ratio = $(window).height()/6;
};

let initVisibility = function () {
    let scrollPercentage = document.documentElement.scrollTop / (0.5 * document.documentElement.clientHeight);
    if (scrollPercentage >= 1) {
        visible = false;
        $('#welcome').hide();
    } else {
        visible = true;
    }
};

let checkVisibility = function () {
    let scrollPercentage = document.documentElement.scrollTop / (0.5 * document.documentElement.clientHeight);
    if (scrollPercentage >= 1) {
        if (visible) {
            visible = false;
            $('#welcome').hide();
        }
        return [false, scrollPercentage];
    }
    if (scrollPercentage <= 1 && !visible) {
        $('#welcome').show();
        visible = true;
    }
    return [true, scrollPercentage];
};

$('body').scrollspy({
    target: '.bs-docs-sidebar',
    offset: 40
});

