function loadPhotos() {
    var ctx=document.getElementById('canvas').getContext('2d')
    var img=new Image();
    img.addEventListener('load', function() {
        ctx.drawImage(img, 0, 0);
    });
    img.src="thumbnails/2019:08:03T10:18:33-cv-castle.jpg";
}
