import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import $ from "jquery";

class Reveal {
    constructor(items, offset) {
        this.lazyimg = $(".lazyload");
        this.item = items;
        this.offsetPercent = offset;
        this.borders = $(".story__emp");
        this.hideInitialy();
        this.creatWaypoints();
        this.displayBorders();
        this.refreshWaypoints();
    }
    hideInitialy() {
        this.item.addClass("reveal-item");
        this.borders.addClass("story__emp__borders--hidden");
   
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
                }         
            });
        });
    }

    displayBorders() {
        this.borders.each(function() {
            const borderRevealed = this;
            new Waypoint({
                element: borderRevealed,
                offset: "100%",
                handler: () => {
                    $(borderRevealed).addClass("story__emp__borders--visible");

                }
            });
        });
        this.borders.addClass()
    }

    refreshWaypoints() {
        this.lazyimg.on("load", function() {
            Waypoint.refreshAll();
            
        });
    }
   




} 

export default Reveal;