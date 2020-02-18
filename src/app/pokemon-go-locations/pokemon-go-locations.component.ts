import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../pokemon.service";
declare var google: any
@Component({
  selector: "app-pokemon-go-locations",
  templateUrl: "./pokemon-go-locations.component.html",
  styleUrls: ["./pokemon-go-locations.component.css"]
})
export class PokemonGoLocationsComponent implements OnInit {
  map;
  markers = [];
  constructor(private pokemonService: PokemonService) {}

  initMap() {
        this.map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 44.9727, lng: -93.23540000000003},
          zoom: 16
        });
        var infoWindow = new google.maps.InfoWindow;
       if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

			var marker = new google.maps.Marker({
				position: pos,
				map: this.map,
				title: 'You are here',
			});
            this.map.setCenter(pos);
          }, function() {
            this.handleLocationError(true, infoWindow, this.map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          this.handleLocationError(false, infoWindow, this.map.getCenter());
        }
     		  this.getLocations(this.map);
  }

  handleLocationError(browserHasGeolocation, infoWindow, pos) {
		infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(this.map);
      }

  getLocations(map) {
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
      var geocoder = new google.maps.Geocoder();
      var table = (<HTMLTableElement>document.getElementById("table"));
      for (var x = 1; x <= 3; x++) {
        var address = table.rows[x].cells[1].innerHTML;
        geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          var myLatLng = {lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()};
          var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: address
          });
  
          this.markers.push(marker);
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
        });
      }
    }
   
  ngOnInit() {
    this.initMap();
  }
}
