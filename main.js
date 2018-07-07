//alert();
var watchID;
if ("geolocation" in navigator){
    //console.log('existe la geolocalizacion');
    watchID = navigator.geolocation.watchPosition(function (position){
        console.log(position);
        var maps = 'http://maps.googleapis.com/maps/api/staticmap?'
        + `markers=icon:|${position.coords.latitude},${position.coords.longitude}`
        + '&zoom=13&size=400x400&sensor=false';
        console.log(maps);
    }, function(error){
        console.log(error);
    },{
        enableHighAccuracy: true,
        maximumAge:  0,
        timeout: Infinity
    })
}else{
    console.log('no funciona en opera mini');
}

setTimeout(function(){
    navigator.geolocation.clearWatch(watchID);
}, 5000);
//navigator.geolocation.clearWatch(watchID);
console.log({watchID});

