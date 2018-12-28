var i = 0, images = ["img/ph-10008.jpg",
                    "img/Dollar Necklace.gif",
                    "img/biz-light.jpeg",
                    "img/biz-pix.jpg",
                    "img/TITIR.jpg",
                    "img/usti.jpg"];

function mySlide(domine){
    if(domine === 'next'){
        i++;
        if(i === images.length){
            i = images.length - 1;
        }
    }else{
        i--;
        if(i < 0){i = 0;}
    }
    document.getElementById('slide').src = images[i];
}

function togleSideBar(){
    document.getElementById("sidebar").classList.toggle('active');
}
