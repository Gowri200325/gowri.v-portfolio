function changeIcon(){
    document.getElementById('change');
    if (change.src.endsWith('images/Add.png')) {
        change.src = 'images/Cancel.png';
    } else {
        change.src = 'images/Add.png';
    }
    document.getElementById('x').classList.toggle("b");
}
function changeIcon1(){
    document.getElementById('change2');
    if (change2.src.endsWith('images/Add.png')) {
        change2.src = 'images/Cancel.png';
    } else {
        change2.src = 'images/Add.png';
    }
    document.getElementById('y').classList.toggle("b");
}
function changeIcon2(){
    document.getElementById('change3');
    if (change3.src.endsWith('images/Add.png')) {
        change3.src = 'images/Cancel.png';
    } else {
        change3.src = 'images/Add.png';
    }
    document.getElementById('z').classList.toggle("b");
}

function xyz(){
  document.getElementById('a').classList.toggle("b");
}
function changeImagesForMobile() {
    const section1Image = document.getElementById('image1');
    const section2Image = document.getElementById('image2');

    if (window.matchMedia("(max-width: 600px)").matches) {
        section1Image.src = 'images/mobhero.png';
        section2Image.src = 'images/mobabout.png';
    } else {
        section1Image.src = 'images/hero.png';
        section2Image.src = 'images/aboutme.png';
    }
}



changeImagesForMobile();

// Add an event listener to call the function on window resize
window.addEventListener('resize', changeImagesForMobile);

