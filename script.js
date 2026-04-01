
let indoorBtn = document.getElementById("indoorBtn");
let flowerBtn = document.getElementById("flowerBtn");
let pottedBtn = document.getElementById("pottedBtn");
let outdoorBtn = document.getElementById("outdoorBtn");

let card_title = document.getElementById("card_title");
let cardText = document.getElementById("cardText");
let card_title2 = document.getElementById("card_title2");
let card_text2 = document.getElementById("card_text2");
let card_title3 = document.getElementById("card_title3");
let card_text3 = document.getElementById("card_text3");

let card_img1=document.getElementById("card_img1");
let card_img2=document.getElementById("card_img2");
let card_img3=document.getElementById("card_img3");

let card_img4=document.getElementById("card_img4");
card_img4.style.backgroundImage='url("img/leaves1.jpg")';

let card_img5=document.getElementById("card_img5");
card_img5.style.backgroundImage='url("img/leaves2.jpg")';

let card_img6=document.getElementById("card_img6");
card_img6.style.backgroundImage='url("img/leaves3.jpg")';

let card_7=document.getElementById("card_7");
 card_img7.style.backgroundImage='url("img/leaves4.jpg")';

let card_8=document.getElementById("card_8");
card_img8.style.backgroundImage='url("img/leaves5.jpg")'

let card_img9=document.getElementById("card_img9")
card_img9.style.backgroundImage='url("img/leaves6.jpg")';

let card_img10=document.getElementById("card_img10")
 card_img10.style.backgroundImage='url("img/leaves7.jpg")'

let card_img11=document.getElementById("card_img11")
 card_img11.style.backgroundImage='url("img/leaves8.jpg")'

let card_img12=document.getElementById("card_img12")
 card_img12.style.backgroundImage='url("img/leaves9.jpg")'

let visible3=document.getElementById("visible3")
let visible2=document.getElementById("visible2")
let visible4=document.getElementById("visible4")
  visible4.style.display='none'
  visible3.style.display='none'
  visible2.style.display='none'

let allBtn=document.getElementById("allBtn")

// Outdoor Plants (по умолчанию)
function change1() {
  card_title.innerHTML = "Pet Friendly Plants";
  cardText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.";

  card_title2.innerHTML = "Orchids";
  card_text2.innerHTML = "Orchids are easily everyone's favorite flowering plant. Find new orchids and orchid success items in this collection.";

  card_title3.innerHTML = "Succulents";
  card_text3.innerHTML = "All succulents are cacti, but not all cacti are succulents. Both make low maintenance house plants.";

    indoorBtn.style.background="#EFEFEF";
  indoorBtn.style.color="#000000";

  outdoorBtn.style.background="#000000";
  outdoorBtn.style.color="#f9fafb";

  flowerBtn.style.background="#EFEFEF";
  flowerBtn.style.color="#000000";

  pottedBtn.style.background="#EFEFEF";
  pottedBtn.style.color="#000000";


  allBtn.style.background="#EFEFEF";
  allBtn.style.color="#000000";

  card_img1.style.backgroundImage='url("img/baground_card.png")';
  card_img2.style.backgroundImage='url("img/flower.png")';
  card_img3.style.backgroundImage='url("img/baground_Succulents.png")';

   visible4.style.display='none'
  visible3.style.display='none'
  visible2.style.display='none'
}

// Indoor Plants
function change2() {
  card_title.innerHTML = "Air Purifying";
  cardText.innerHTML = "These plants naturally filter toxins from the air, improving indoor air quality. Perfect for bedrooms, living rooms, and home offices where you spend most of your time.";

  card_title2.innerHTML = "Low Light Tolerant";
  card_text2.innerHTML = "Thriving in dim corners and spaces with minimal natural light, these resilient plants bring life to challenging areas of your home without demanding direct sunlight.";

  card_title3.innerHTML = "Humidity Lovers";
  card_text3.innerHTML = "Ideal for bathrooms and kitchens, these tropical beauties flourish in moist environments and add a lush, spa-like atmosphere to your humid spaces.";

  indoorBtn.style.background="#000000";
  indoorBtn.style.color="#f9fafb";

  outdoorBtn.style.background="#EFEFEF";
  outdoorBtn.style.color="#000000";

  flowerBtn.style.background="#EFEFEF";
  flowerBtn.style.color="#000000";

  pottedBtn.style.background="#EFEFEF";
  pottedBtn.style.color="#000000";

  allBtn.style.background="#EFEFEF";
  allBtn.style.color="#000000";

  card_img1.style.backgroundImage='url("img/leaves1.jpg")';
  card_img2.style.backgroundImage='url("img/leaves2.jpg")';
  card_img3.style.backgroundImage='url("img/leaves3.jpg")';

  visible2.style.display='none'
  visible3.style.display='none'
  visible4.style.display='none'
}

// Flower Pots
function change3() {
  card_title.innerHTML = "Ceramic Pots";
  cardText.innerHTML = "Handcrafted ceramic pots with drainage holes, available in matte and glazed finishes. Each piece is uniquely made by local artisans, adding character to your plant display.";

  card_title2.innerHTML = "Terracotta Collection";
  card_text2.innerHTML = "Classic breathable terracotta pots that help prevent overwatering. Their natural porous texture allows air and moisture to move through the walls, promoting healthy root growth.";

  card_title3.innerHTML = "Modern Planters";
  card_text3.innerHTML = "Sleek geometric designs in concrete, metal, and recycled materials. Perfect for contemporary interiors, these planters combine functionality with minimalist aesthetics.";


  indoorBtn.style.background="#EFEFEF";
  indoorBtn.style.color="#000000";

  outdoorBtn.style.background="#EFEFEF";
  outdoorBtn.style.color="#000000";

  flowerBtn.style.background="#000000";
  flowerBtn.style.color="#f9fafb";

  pottedBtn.style.background="#EFEFEF";
  pottedBtn.style.color="#000000";

  allBtn.style.background="#EFEFEF";
  allBtn.style.color="#000000";

   card_img1.style.backgroundImage='url("img/leaves4.jpg")';
  card_img2.style.backgroundImage='url("img/leaves5.jpg")';
  card_img3.style.backgroundImage='url("img/leaves6.jpg")';

  visible2.style.display='none';
  visible3.style.display='none';
  visible4.style.display='none';
}

// Potted Plants
function change4() {
  card_title.innerHTML = "Ready-to-Grow Kits";
  cardText.innerHTML = "Complete starter kits with everything you need: premium soil, seeds or starter plants, decorative pots, and easy-care instructions. Perfect for beginners and gift-giving.";

  card_title2.innerHTML = "Hanging Baskets";
  card_text2.innerHTML = "Beautiful cascading plants in suspended baskets that save floor space and add vertical interest. Includes macramé hangers, metal frames, and self-watering options.";

  card_title3.innerHTML = "Bonsai Collection";
  card_text3.innerHTML = "Miniature living art pieces carefully trained and pruned for decades. Each bonsai tells a story and brings tranquility, patience, and Japanese tradition to your space.";



  indoorBtn.style.background="#EFEFEF";
  indoorBtn.style.color="#000000";

  outdoorBtn.style.background="#EFEFEF"
  outdoorBtn.style.color="#000000"

  flowerBtn.style.background="#EFEFEF"
  flowerBtn.style.color="#000000"

  pottedBtn.style.background="#000000"//черный цвет
  pottedBtn.style.color="#EFEFEF"// белый для текста

  allBtn.style.background="#EFEFEF";
  allBtn.style.color="#000000";
 
  card_img2.style.backgroundImage='url("img/leaves8.jpg")'
  card_img3.style.backgroundImage='url("img/leaves9.jpg")'

  visible2.style.display='none'
  visible3.style.display='none'
  visible4.style.display='none'
}


function see_all(){
  visible2.style.display='flex';
  visible3.style.display='flex';
  visible4.style.display='flex';

  allBtn.style.backgroundColor="#000000"
  allBtn.style.color="#f9fafb"

  indoorBtn.style.background="#EFEFEF";
  indoorBtn.style.color="#000000";

  outdoorBtn.style.background="#EFEFEF";
  outdoorBtn.style.color="#000000";

  flowerBtn.style.background="#EFEFEF";
  flowerBtn.style.color="#000000";

  pottedBtn.style.background="#EFEFEF";
  pottedBtn.style.color="#000000";
}

// Назначаем события кнопкам
if (outdoorBtn) {
  outdoorBtn.addEventListener('click', change1);
}

if (indoorBtn) {
  indoorBtn.addEventListener('click', change2);
}

if (flowerBtn) {
  flowerBtn.addEventListener('click', change3);
}

if (pottedBtn) {
  pottedBtn.addEventListener('click', change4);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  change1(); // Показываем контент по умолчанию (Outdoor Plants)

  // === АНИМАЦИЯ ПРИ СКРОЛЛЕ ===
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Наблюдаем за всеми элементами с классом анимации
  document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in').forEach(el => {
    observer.observe(el);
  });

  // === СЛАЙДЕР ОТЗЫВОВ ===
  const track = document.getElementById('testimonialsTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.getElementById('sliderDots');
  const cards = document.querySelectorAll('.testimonial-card');

  if (track && prevBtn && nextBtn && dotsContainer) {
    let currentIndex = 0;
    const cardWidth = 400;
    const gap = 30;

    // Создаём точки
    cards.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('slider-dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.slider-dot');

    function updateDots() {
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }

    function goToSlide(index) {
      currentIndex = index;
      const scrollPosition = currentIndex * (cardWidth + gap);
      track.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      updateDots();
    }

    function updateOnScroll() {
      const scrollPosition = track.scrollLeft;
      const newIndex = Math.round(scrollPosition / (cardWidth + gap));
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < cards.length) {
        currentIndex = newIndex;
        updateDots();
      }
    }

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        goToSlide(currentIndex - 1);
      }
    });

    nextBtn.addEventListener('click', () => {
      if (currentIndex < cards.length - 1) {
        goToSlide(currentIndex + 1);
      }
    });

    track.addEventListener('scroll', updateOnScroll);

    // Автопрокрутка
    let autoScroll = setInterval(() => {
      if (currentIndex < cards.length - 1) {
        goToSlide(currentIndex + 1);
      } else {
        goToSlide(0);
      }
    }, 5000);

    // Останавливаем автопрокрутку при наведении
    track.addEventListener('mouseenter', () => clearInterval(autoScroll));
    track.addEventListener('mouseleave', () => {
      autoScroll = setInterval(() => {
        if (currentIndex < cards.length - 1) {
          goToSlide(currentIndex + 1);
        } else {
          goToSlide(0);
        }
      }, 5000);
    });
  }
});


  document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.close-menu');
    
    // Открыть меню
    burger.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden'; // блокируем скролл
    });
    
    // Закрыть меню
    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = ''; // возвращаем скролл
    });
    
    // Закрыть меню при клике вне контента
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
