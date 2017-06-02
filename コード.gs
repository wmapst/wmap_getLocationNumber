function wmap_getLocationNumber(address) {
  var api_url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURI(address);
  var response = UrlFetchApp.fetch(api_url);
  var result = JSON.parse(response);
  var location = result['results'][0]['geometry']['location'];
  
  return [ [ location['lat'] , location['lng'] ] ];
}