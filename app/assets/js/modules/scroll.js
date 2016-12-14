require('../../../../node_modules/gsap/src/uncompressed/TweenLite');
require('../../../../node_modules/gsap/src/uncompressed/plugins/ScrollToPlugin');
import TweenMax from 'gsap';
import $ from "jquery";



class Scroll {
    constructor() {
        this.win = window;
        this.scrollTime = 1.2;
        this.scrollDistance = 170;
        this.scrollTop = $(window).scrollTop();
        this.handleWheel();

    }

    handleWheel() {
        let delta = 0;
        const that = this;
        this.win.addEventListener("mousewheel", (e) => {
            const event = that.getEvent(e);
            event.preventDefault();
            delta += event.wheelDelta / 120;
            that.handleDelta(delta);					 
        });
        this.win.addEventListener("DOMMouseScroll", (e) => {
            const event = this.getEvent(e);
            event.preventDefault();
            delta -= event.detail / 3;
            this.handleDelta(delta);
        });
                 
    }

    getEvent(event) {
        return event ? event : this.win.event;
    }

    handleDelta(delta) {
        let finalScroll = 0;
        // this.scrollTop += delta; 
        finalScroll = this.scrollTop - (delta * this.scrollDistance);
        TweenMax.to(this.win, this.scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
            ease: Power1.easeOut,
            overwrite: 5
        });
    }
}

export default Scroll;