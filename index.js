const menuBtn = document.querySelector('.header__menu-btn');
const menu = document.querySelector('.header__menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

const years = [
    {
        number: "26",
        year: "ЛЕТ",
        marcet: "на рынке"
    },
    {
        number: "26",
        year: "ЛЕТ",
        marcet: "на рынке"
    },
    {
        number: "26",
        year: "ЛЕТ",
        marcet: "на рынке"
    },
    {
        number: "26",
        year: "ЛЕТ",
        marcet: "на рынке"
    }
];

const years__content = document.querySelector(".years__content");

years.map(item => {
    years__content.innerHTML += `
    <div class="years__box">
        <h2 class="years__number">
             ${item.number}
        </h2>
        <h3 class="yaers__year">${item.year}</h3>
        <p class="years__marcet">${item.marcet}</p>
    </div>
    `
});

const projects = [
    {
        title: "Газпром Арена",
        imgUrl: "./assets/img/project/Rectangle 3.png",
        description: "Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву."
    },
    {
        title: "Газпром Арена",
        imgUrl: "./assets/img/project/Rectangle 3.png",
        description: "Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву."
    },
    {
        title: "Газпром Арена",
        imgUrl: "./assets/img/project/Rectangle 3.png",
        description: "Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву."
    },
];

const projects__content = document.querySelector(".projects__content");

projects.map(item => {
    projects__content.innerHTML += `
    <div class="projects__item">
        <img src="${item.imgUrl}" alt="photo" class ="project__img">
        <h2 class="project__title">${item.title}</h2>
        <p class="project__description">${item.description}</p>
    </div>    
    `
});

