export function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const degsToRads = deg => (deg * Math.PI) / 180.0;
  var R = 6371; // Radius of the earth in km
  var dLat = degsToRads(lat2 - lat1); // deg2rad below
  var dLon = degsToRads(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degsToRads(lat1)) *
      Math.cos(degsToRads(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}
export const defaultLocation = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.015,
  longitudeDelta: 0.0121,
};
