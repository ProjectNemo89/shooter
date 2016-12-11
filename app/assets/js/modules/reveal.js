import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import $ from "jquery";

class Reveal {
    constructor(items, offset) {
        this.item = items;
        this.offsetPercent = offset;
        this.hideInitialy();
        this.creatWaypoints();
    }
    hideInitialy() {
        this.item.addClass("reveal-item");
    }
    creatWaypoints() {
        const that = this;
        this.item.each(function() {
            const itemRevealed = this;
            new Waypoint({
                element: itemRevealed,
                offset: that.offsetPercent,
                handler: () => {
                   $(itemRevealed).addClass("reveal-item--reveal");
                   console.log("trigger");
                }
                
            });

        });

    }
   




} 

export default Reveal;