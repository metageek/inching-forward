function loadPhotos() {
    var request = new XMLHttpRequest();
    request.open("GET", "photos/photos.json", true);
    request.onreadystatechange = function() {
        if ( request.readyState === 4 && request.status === 200 ) {
            var photos = JSON.parse(request.responseText);
            console.log(photos);
            showPhotos(photos);
        }
    };
    request.send(null);
}

function showPhotos(photos) {
    var ctx=document.getElementById('canvas').getContext('2d')
    var img=new Image();
    img.addEventListener('load', function() {
        ctx.drawImage(img, 0, 0);
    });
    img.src='thumbnails/'+photos[0]['File'];
}
