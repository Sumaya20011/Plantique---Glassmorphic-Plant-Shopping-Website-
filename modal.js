let modalOverlay=document.getElementById("modalOverlay"); //модальное окно
let cross=document.getElementById("cross"); //крестик
let modalImg=document.getElementById("modalImg"); //картинка
let modaltitle=document.getElementById("modaltitle"); //заголовок
let modalP=document.getElementById("modalP"); //текст

let modal_video=document.getElementById("modal_video");

function crossBtn(){
    modal_video.style.display="none";
}

function closeModal(){
    modalOverlay.style.display="none";
}

function showCardOne(){
    modalOverlay.style.display="flex";
    modalImg.src="img/bagroundleaves3.jpg";
    modaltitle.innerHTML="Philodendron";
    modalP.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.";
}

function showCardtoo(){
    modalOverlay.style.display="flex";
    modalImg.src="img/bagroundleaves2.jpg";
    modaltitle.innerHTML="Air Purifying";
}

function showCardthree(){
    modalOverlay.style.display="flex";
    modalImg.src="img/bagroundleaves1.jpg";
    modaltitle.innerHTML="Air Purifying";
}

function showCardfour(){
    modalOverlay.style.display="flex";
    modalImg.src="img/bagroundleaves4.jpg";
    modaltitle.innerHTML="Air Purifying";
}

