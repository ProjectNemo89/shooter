require('../../../../node_modules/gsap/src/uncompressed/TweenLite');
require('../../../../node_modules/gsap/src/uncompressed/plugins/ScrollToPlugin');
import TweenMax from 'gsap';
import $ from "jquery";



class Scroll {
    constructor() {
        this.win = $(window);
        this.scrollTime = 1;
        this.scrollDistance = 250;
        this.handleWheel();

    }

    handleWheel() {
        let delta = 0;
        const that = this;
        this.win.on("mousewheel", (e) => {
            const event = that.getEvent(e);
           e.preventDefault();
            delta = event.originalEvent.wheelDelta / 120;
            that.handleDelta(delta);
            					 
        });
        this.win.on("DOMMouseScroll", (e) => {
            const event = this.getEvent(e);
            event.preventDefault();
            delta = -event.originalEvent.detail / 3;
            this.handleDelta(delta);
        });
                 
    }

    getEvent(event) {
        return event ? event : this.win.event;
    }

    handleDelta(delta) {    
        let finalScroll = $(window).scrollTop() - parseInt(delta * this.scrollDistance);    
        TweenMax.to(this.win, this.scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
            ease: Power1.easeOut,
            overwrite: 5
        });
    }
}

export default Scroll;