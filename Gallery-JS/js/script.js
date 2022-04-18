var imageList = document.getElementsByClassName("image");
var currentImage = 1;
function bLeft(){
    document.getElementById(currentImage).style.border = '';
    currentImage = --currentImage <= 0 ? imageList.length : currentImage--;
    changeMainImage(currentImage);
}
function bRight(){
    document.getElementById(currentImage).style.border = '';
    currentImage = ++currentImage > imageList.length ? 1 : currentImage++;
    changeMainImage(currentImage);
}
function changeMainImage(imageId){
    document.getElementById("full-image").src = "img/img" + imageId + ".jpg";
    document.getElementById(currentImage).style.border = '';
    currentImage = imageId;
    document.getElementById(currentImage).style.border = '3px solid red';
}
function carousel(boolValue){
    switch(boolValue){
        case true:
            bLeft();
            break;
        case false:
            bRight();
            break;
    }
    var left = currentImage >= imageList.length - 2 ? imageList.length - 4 : currentImage - 2;
    var middle = currentImage + 3 > imageList.length ? imageList.length + 1 : currentImage + 3;
    // var right = currentImage + 2 > imageList.length ? imageList.length : currentImage + 2;
    var right = currentImage <= 3 ? 5 : currentImage + 2;
    for(i = 1; i < left; i++){
        try{ document.getElementById(i).hidden = true; }
        catch{ continue; }
    }
    for(i = left; i < middle; i++){
        try{ document.getElementById(i).hidden = false; }
        catch{ continue; }    
    }
    for(i = imageList.length; i > right; i--){
        try{ document.getElementById(i).hidden = true; }
        catch{ continue; }    
    }
}