function ScrollDown() {
    let elementLi = document.getElementById("contactGallery");
    elementLi.scrollIntoView();
}

function ScrollDownShow() {
    let elementLi = document.getElementById("carouselShow");
    elementLi.scrollIntoView({behavior: 'smooth'});
    
}


var index = 0;
var items = document.getElementsByClassName("thunderstorm");
startcarousel();

function plusDivs() {
    carousel ();  
    index ++;
}
function minusDivs() {
    carousel ();  
    index --;
}

function carousel() { 
    if( index > items.length-1 ) { index = 0}
    if ( index < 0 ) {index = items.length-1; }
    for ( var i = 0; i < items.length; i++) {
        items[i].style.display = "none";
    }
    
    index++;
    items[index-1].style.display = "block";    
    console.log(index);
}


function startcarousel() {
    carousel();
setInterval(carousel, 3000);
}

