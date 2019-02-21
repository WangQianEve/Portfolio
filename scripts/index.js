let ratio;
let visible;
let transform_origin;

AOS.init();
var controller = new ScrollMagic.Controller();

window.onload = function () {
    var scene1 = new ScrollMagic.Scene({triggerElement: "#work_title", triggerHook: 'onEnter', offset: 200}) //, triggerOffset: 1000, duration: 300
        .setClassToggle("#work_white_title", "rotate-back")
        .addTo(controller);
    var scene2 = new ScrollMagic.Scene({triggerElement: "#work_title", triggerHook: 'onEnter', offset: 200})
        .setClassToggle("#work_black_title", "rotate-forward")
        .addTo(controller);
    var scene1 = new ScrollMagic.Scene({triggerElement: "#about_title", triggerHook: 'onEnter', offset: 200}) //, triggerOffset: 1000, duration: 300
        .setClassToggle("#about_white_title", "rotate-back")
        .addTo(controller);
    var scene2 = new ScrollMagic.Scene({triggerElement: "#about_title", triggerHook: 'onEnter', offset: 200})
        .setClassToggle("#about_black_title", "rotate-forward")
        .addTo(controller);
    var scene1 = new ScrollMagic.Scene({triggerElement: "#play_title", triggerHook: 'onEnter', offset: 200}) //, triggerOffset: 1000, duration: 300
        .setClassToggle("#play_white_title", "rotate-back")
        .addTo(controller);
    var scene2 = new ScrollMagic.Scene({triggerElement: "#play_title", triggerHook: 'onEnter', offset: 200})
        .setClassToggle("#play_black_title", "rotate-forward")
        .addTo(controller);
    if (document.documentElement.clientWidth <= 768) {
        return;
    }
    updateWelcome();
    initVisibility();
    window.addEventListener("scroll", function (e) {
        let vals = checkVisibility();
        let cont = vals[0];
        let scrollPercentage = vals[1];
        if (!cont) {
            return;
        }
        let scale = 1 + scrollPercentage * ratio;
        $('#welcome').css({
            "transform": "scale(" + scale + ")",
            "transform-origin": transform_origin.x + "px " + transform_origin.y + "px"
        });
        // console.log(transform_origin, "scale", scale);
    });
    window.addEventListener("resize", updateWelcome);
};

let updateWelcome = function () {
    let q = $('#q_svg');
    let q_pos = q.position();
    let q_size = {height: q.height(), width: q.width()};
    transform_origin = {x: q_pos.left + q_size.width * 0.55, y: (q_pos.top + q_size.height * 0.78)};
    ratio = $(window).height() / 6;
    // console.log(transform_origin, "ratio", ratio);
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

let getScrollTop = function () {
    return Math.max(0, window.scrollY || window.pageYOffset || document.body.scrollTop
        + (document.documentElement && document.documentElement.scrollTop || 0));
};

let checkVisibility = function () {
    let scrollPercentage = getScrollTop() / (0.5 * document.documentElement.clientHeight);
    // console.log(document.documentElement.scrollTop, document.documentElement.clientHeight);
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

