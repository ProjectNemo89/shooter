class Map {
    constructor() {

        this.mapOptions = {
            center: new google.maps.LatLng(44.574823, 21.142077),
            mapTypeId: google.maps.MapTypeId.HYBRID,
            zoom: 13,
            panControl: false,
			zoomControl: false,
			mapTypeControl: false,
			streetViewControl: false
        },
        this.marker = new google.maps.Marker({
    	 position: this.mapOptions.center,
    	 map: this.map,
         visible: true,
    	 title: 'Dejan Vukojevic Academy'
  		 });
        this.map = new google.maps.Map(
        document.querySelector('.contact__map'), 
        this.mapOptions),

        this.setMarker();
    }

    setMarker() {
        this.marker.setMap(this.map);
    }


}

export default Map;