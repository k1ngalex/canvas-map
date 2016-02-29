document.addEventListener("DOMContentLoaded", function() {
    console.log("hello");
    getLocation();

});

function getLocation() {
    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(reportPosition, gpsError);

    } else {

        alert("kill ur self");
    }

}

function reportPosition(position) {
   var canvas = document.createElement("canvas");
	document.querySelector("body").appendChild(canvas);
    var ctx = canvas.getContext("2d");
    //set up canvas and context in DOM
    console.log('map loading...');
    var staticMap = document.createElement("img");
    staticMap.src = "https://maps.googleapis.com/maps/api/staticmap?center=" +
        position.coords.latitude + "," + position.coords.longitude +
        "&zoom=14&size=350x150&maptype=roadmap&markers=color:red%7Clabel:A%7C" +
        position.coords.latitude + "," + position.coords.longitude +
        "&key=AIzaSyCIZLWEh1AoE6e-WhsZLKH3IcGGSrq0WCo";
    //create image and set the souce to a static img fethed from google maps
    staticMap.onload = function() {
        ctx.drawImage(staticMap, 0, 0);
    }; //draw image to canvas when it has been loaded

    document.getElementById("lat").innerHTML = "latitude is " + position.coords.latitude;
    document.getElementById("long").innerHTML = "longitude is " + position.coords.longitude;
    document.getElementById("acc").innerHTML = "accuracy is " + position.coords.accuracy;
    document.getElementById("alt").innerHTML = "altitude is " + position.coords.altitude;
    document.getElementById("alt acc").innerHTML = "altitudeAccuracy is " + position.coords.altitudeAccuracy;
    document.getElementById("heading").innerHTML = "heading is " + position.coords.heading;
    document.getElementById("speed").innerHTML = "speed is " + position.coords.speed;


}

function gpsError(error) {
    alert(" You're in space");
}