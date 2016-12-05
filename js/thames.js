  var thames ="360 Thames St, Newport, RI 02840";
  var fluke = "41 Bowens Wharf, Newport, RI 02840";

function initMap() {
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var directionsService = new google.maps.DirectionsService;
  var newport = {lat: 41.483979, lng: -71.314371}; 
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: newport
  });

  var contentString = '<div id="content">' + 
    '<div id="siteNotice">'+
    '</div id>' +
    '<h1 id="firstHeading" class="firstHeading">Newport, RI</h1>' +
    '<div id="bodyContent">'+
    '<p><b>Newport</b>, is a city in the New England state of Rhode Island, set on Aquidneck Island. ' +
    'The City of Newport is located approximately 37 miles (60 km) south-east of Providence, '+
    '21 miles (34 km) south of Fall River, and 74 miles (119 km) south of Boston.'+
    'Known as a New England summer resort and for the famous Newport Mansions, '+
    'it is the home of Salve Regina University and Naval Station Newport.</p>'+
    '</div>'+
    '</div>';
      
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
 
  var marker = new google.maps.Marker({
    position: newport,
    map: map,
    title: 'Newport RI'
  });

  // var mariott = document.getElementById('mariott').value;
  var mariott = { lat: 41.490023, lng: -71.318057 };
  console.log(mariott);
  // var beachflag = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  // var blue = '  http://maps.google.com/mapfiles/ms/icons/blue.png';
  // var water = '  http://maps.google.com/mapfiles/ms/icons/water.png';

  // var markerMariott = new google.maps.Marker({
  //   position:{ lat: 41.490023, lng: -71.318057 },
  //   map: map,
  //   title: 'Newport RI',
  //   icon: beachflag

  // });

  // addMarker(mariott, map, "Mariott");
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('right-panel'));

  var onChangeHandler = function() {
    calcAndDisplayRoute(directionsService, directionsDisplay);
  };
  document.getElementById('calc-button').addEventListener('click', onChangeHandler);
  // document.getElementById('start').addEventListener('change', onChangeHandler);
  // document.getElementById('end').addEventListener('change', onChangeHandler);

}

  function calcAndDisplayRoute(directionsService, directionsDisplay) {
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    directionsService.route({
      origin: start,
      destination: end,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });

  }


          


// In the following example, markers appear when the user clicks on the map.
// Each marker is labeled with a single alphabetical character.
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;

// Adds a marker to the map.
function addMarker(location, map, label) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var newMarker = new google.maps.Marker({
    position: location,
    // label: labels[labelIndex++ % labels.length],
    label: label,
    map: map
  });

  console.log("add Marker");
}

        document.getElementById('submit').addEventListener('click', function() {
          initMap();
          
        });