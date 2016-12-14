import $ from "jquery";
import "./lazymap";

class Map {
    constructor() {       
        this.mapInit();
    }
    mapInit() {
        $(".contact__map").lazyLoadGoogleMaps({
            key: "AIzaSyALMQTdfOBdjhJXatLsc4YPcaPXI4KzsFs",
            callback: function(container, map) {
                const $container = $(container),
                center = new google.maps.LatLng(44.574823, 21.142077);
                map.setOptions(
                    {zoom: 13, 
                     center,
                     mapTypeId: google.maps.MapTypeId.HYBRID,
                     panControl: false,
                     zoomControl: false,
                     mapTypeControl: false,
                     streetViewControl: false
                    });
                new google.maps.Marker(
                    {position: center, 
                     map,
                     visible: true,
                     title: "Dejan Vukojevic Academy"
                });
            } 
        });
    }
}



export default Map;