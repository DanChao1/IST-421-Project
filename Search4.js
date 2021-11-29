// This example uses the autocomplete feature of the Google Places API.
// It allows the user to find all hotels in a given place, within a given
// country. It then displays markers for all the hotels returned,
// with on-click details for each hotel.

var map, places, infoWindow;
var markers = [];
var autocomplete;
//var countryRestrict = { 'country': 'us' };
//var MARKER_PATH = 'https://maps.gstatic.com/intl/en_us/mapfiles/marker_green';
//var hostnameRegexp = new RegExp('^https?://.+?/');

var countries = {
  'au': {
    center: new google.maps.LatLng(-25.3, 133.8),
    zoom: 4
  },
  'br': {
    center: new google.maps.LatLng(-14.2, -51.9),
    zoom: 3
  },
  'ca': {
    center: new google.maps.LatLng(62, -110.0),
    zoom: 3
  },
  'fr': {
    center: new google.maps.LatLng(46.2, 2.2),
    zoom: 5
  },
  'de': {
    center: new google.maps.LatLng(51.2, 10.4),
    zoom: 5
  },
  'mx': {
    center: new google.maps.LatLng(23.6, -102.5),
    zoom: 4
  },
  'nz': {
    center: new google.maps.LatLng(-40.9, 174.9),
    zoom: 5
  },
  'it': {
    center: new google.maps.LatLng(41.9, 12.6),
    zoom: 5
  },
  'za': {
    center: new google.maps.LatLng(-30.6, 22.9),
    zoom: 5
  },
  'es': {
    center: new google.maps.LatLng(40.5, -3.7),
    zoom: 5
  },
  'pt': {
    center: new google.maps.LatLng(39.4, -8.2),
    zoom: 6
  },
  'us': {
    center: new google.maps.LatLng(37.1, -95.7),
    zoom: 3
  },
  'uk': {
    center: new google.maps.LatLng(54.8, -4.6),
    zoom: 5
  }
};

function initialize() {
  var myOptions = {
    zoom: countries['us'].zoom,
    center: countries['us'].center,
    mapTypeControl: false,
    panControl: false,
    zoomControl: false,
    streetViewControl: false
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);

  google.maps.event.addDomListener(document.getElementById('country'), 'change',
      setAutocompleteCountry);
}//


// [START region_setcountry]
// Set the country restriction based on user input.
// Also center and zoom the map on the given country.
function setAutocompleteCountry() {
  var country = document.getElementById('country').value;
  //if (country == 'all') {
   // autocomplete.setComponentRestrictions([]);
   // map.setCenter(new google.maps.LatLng(15, 0));
   // map.setZoom(2);
 // } else {
    //autocomplete.setComponentRestrictions({ 'country': country });
    map.setCenter(countries[country].center);
    map.setZoom(countries[country].zoom);
  //}
  //clearResults();
  //clearMarkers();
}
// [END region_setcountry]