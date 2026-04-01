let modalOverlay=document.getElementById("modalOverlay"); //модальное окно
let cross=document.getElementById("cross"); //крестик
let modalImg=document.getElementById("modalImg"); //картинка
let modaltitle=document.getElementById("modaltitle"); //заголовок
let modalP=document.getElementById("modalP"); //текст
let modalInfo=document.getElementById("modalInfo"); //инфо блок

let modal_video=document.getElementById("modal_video");

function crossBtn(){
    modal_video.classList.remove("active");
    document.body.style.overflow = "";
    
    // Останавливаем видео при закрытии
    const videoFrame = document.getElementById("videoFrame");
    if (videoFrame) {
        const iframeSrc = videoFrame.src;
        videoFrame.src = iframeSrc; // Перезагружаем iframe для остановки видео
    }
    
    setTimeout(() => {
        modal_video.style.display = "none";
    }, 400);
}

function closeModal(){
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
    setTimeout(() => {
        modalOverlay.style.display = "none";
    }, 300);
}

function OpenModalVideo(){
    modal_video.style.display="flex";
    setTimeout(() => {
        modal_video.classList.add("active");
    }, 10);
    document.body.style.overflow = "hidden";
}

// Закрытие по клику на фон
modal_video.addEventListener("click", function(e){
    if(e.target === modal_video){
        crossBtn();
    }
});

// Закрытие по клику на фон для modal-overlay
modalOverlay.addEventListener("click", function(e){
    if(e.target === modalOverlay){
        closeModal();
    }
});

function showCardOne(){
    modalOverlay.style.display="flex";
    modalImg.src="img/bagroundleaves3.jpg";
    modaltitle.innerHTML="Philodendron";
    modalP.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.";
    setTimeout(() => {
        modalOverlay.classList.add("active");
    }, 10);
    document.body.style.overflow = "hidden";
}

function showCardtoo(){
    modalOverlay.style.display="flex";
    modalImg.src="img/bagroundleaves2.jpg";
    modaltitle.innerHTML="Air Purifying";
    modalP.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim.";
    setTimeout(() => {
        modalOverlay.classList.add("active");
    }, 10);
    document.body.style.overflow = "hidden";
}

function showCardthree(){
    modalOverlay.style.display="flex";
    modalImg.src="img/bagroundleaves1.jpg";
    modaltitle.innerHTML="Air Purifying";
    modalP.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim.";
    setTimeout(() => {
        modalOverlay.classList.add("active");
    }, 10);
    document.body.style.overflow = "hidden";
}

function showCardfour(){
    modalOverlay.style.display="flex";
    modalImg.src="img/bagroundleaves4.jpg";
    modaltitle.innerHTML="Air Purifying";
    modalP.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim.";
    setTimeout(() => {
        modalOverlay.classList.add("active");
    }, 10);
    document.body.style.overflow = "hidden";
}

