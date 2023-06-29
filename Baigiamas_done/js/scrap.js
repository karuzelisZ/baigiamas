
function changeImage(){
    let displayImage = document.getElementById('cimg1')
    if(displayImage.src.match('../images/cat_1.jpg')){
        displayImage.src = '../images/cat_3.jpg'
    }else {
        displayImage.src = '../images/cat_1.jpg'
    }
};

function changeImage2(){
    let displayImage = document.getElementById('cimg2')
    if(displayImage.src.match('../images/cat_2.jpg')){
        displayImage.src = '../images/cat_1.jpg'
    }else {
        displayImage.src = '../images/cat_2.jpg'
    }
};

function changeImage3(){
    let displayImage = document.getElementById('cimg3')
    if(displayImage.src.match('../images/cat_3.jpg')){
        displayImage.src = '../images/cat_2.jpg'
    }else {
        displayImage.src = '../images/cat_3.jpg'
    }
};
function changeImage4(){
    let displayImage = document.getElementById('dimg1')
    if(displayImage.src.match('../images/dog_1.jpg')){
        displayImage.src = '../images/dog_3.jpg'
    }else {
        displayImage.src = '../images/dog_1.jpg'
    }
};
function changeImage5(){
    let displayImage = document.getElementById('dimg2')
    if(displayImage.src.match('../images/dog_2.jpg')){
        displayImage.src = '../images/dog_1.jpg'
    }else {
        displayImage.src = '../images/dog_2.jpg'
    }
};
function changeImage6(){
    let displayImage = document.getElementById('dimg3')
    if(displayImage.src.match('../images/dog_3.jpg')){
        displayImage.src = '../images/dog_2.jpg'
    }else {
        displayImage.src = '../images/dog_3.jpg'
    }
};

