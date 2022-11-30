var colors = {
    'section6': 'white',
    'section5': '#00c1b5',
    'section4': '#ff651a',
    'section3': '#ffbe00',
    'section2': '#1d3fbb',
    'section1': '#e30512',
}

var body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = colors.section1;

window.onscroll = function (event){
    var scroll = window.pageYOffset;
    if(scroll < 1000) {
        body.style.backgroundColor = colors.section6;

    }else if(scroll >= 1000  && scroll < 2000) {
        body.style.backgroundColor = colors.section5;
    
    }else if(scroll >= 2000 && scroll < 3000) {
        body.style.backgroundColor = colors.section4;
    
    }else if(scroll >= 3000 && scroll < 4000) {
        body.style.backgroundColor = colors.section3;
    
    }else if(scroll >= 4000 && scroll < 5000) {
        body.style.backgroundColor = colors.section2;
    
    }else if(scroll >= 5000 && scroll < 6000) {
        body.style.backgroundColor = colors.section1;
    }
}