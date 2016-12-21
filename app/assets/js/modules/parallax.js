import Rellax from "rellax";
import $ from "jquery";

class Parallax {
    constructor(selector, speed) {
        this.selector = selector;
        this.speed = speed;
        this.onSmallWindow();
    }

    onSmallWindow() {
        const width = $(window).width();
        const targets = $(".parallax-up, .parallax-down");

        if((width > 300 && width < 600) && (targets.hasClass("parallax-up") || targets.hasClass("parallax-down")) ) {
            targets.removeClass("parallax-up").removeClass("parallax-down");
        }
        if (width > 600 && (!targets.hasClass("parallax-up") || !targets.hasClass("parallax-down"))) {
            this.parallax = new Rellax(this.selector, {speed: this.speed});
        }

    }
    
}

export default Parallax;
