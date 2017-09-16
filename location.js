function initialize() {
  var map_canvas = document.getElementById('map_canvas');
  var myLatlng = new google.maps.LatLng(47.560409, -122.304339)
  var map_options = {
    center: myLatlng,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(map_canvas, map_options)

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map
  });
}
google.maps.event.addDomListener(window, 'load', initialize);