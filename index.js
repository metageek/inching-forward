function loadPhotos() {
    var request = new XMLHttpRequest();
    request.open("GET", "photos/photos.json", true);
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            var photos = JSON.parse(request.responseText);
            parsePhotos(photos);
        }
    };
    request.send(null);
}

function parsePhotos(photos) {
    var ctx=document.getElementById('canvas').getContext('2d')
	photos.sort(function(a, b) {
		if (a["File"] < b["File"]) { return -1; }
		if (a["File"] > b["File"]) { return 1; }
		return 0;
	});
	var imgs = {};
	photos.reverse();
	var numLeft=photos.length;
    photos.forEach(function(photo) {
        var img=new Image();
        img.addEventListener('load', function() {
			numLeft -= 1;
			var x = photo['X'];
            var y = photo['Y'];
			imgs[photo["File"]] = [img, x, y];
			if (numLeft == 0) {
				photos.forEach(function (p) {
					var imgSpec=imgs[p["File"]];
					var img = imgSpec[0];
					var x = imgSpec[1];
					var y = imgSpec[2];
					if (x != null && y != null) {
						ctx.drawImage(img, x, y);
					}
				});
            }
        });
        img.src='thumbnails/'+photo['File'];
    });
}
