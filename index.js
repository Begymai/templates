const menuBtn = document.querySelector('.header__menu-btn');
const menu = document.querySelector('.header__menu');

menuBtn.addEventListener('click', function () {
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
        <img src="${item.imgUrl}" alt="photo" class ="projects__img">
        <h2 class="projects__title">${item.title}</h2>
        <p class="projects__description">${item.description}</p>
    </div>    
    `
});


const study = [
    {
        title: "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ",
        imgUrl: "./assets/img/study/study.svg",

    },
    {
        title: "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ",
        imgUrl: "./assets/img/study/study.svg",
    },
    {
        title: "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ",
        imgUrl: "./assets/img/study/study.svg",
    },
    {
        title: "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ",
        imgUrl: "./assets/img/study/study.svg",
    },
    {
        title: "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ",
        imgUrl: "./assets/img/study/study.svg",
    },
    {
        title: "СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ",
        imgUrl: "./assets/img/study/study.svg",
    },
];

const study__content = document.querySelector(".study__content");

study.map(item => {
    study__content.innerHTML += `
    <div class="study__item">
        <img src="${item.imgUrl}" class="study__img">
        <h2 class="study__title">${item.title}</h2>
        </div> 
    `
});

const building = [
    {
        imgUrl: "./assets/img/building/building.svg",
    },
    {
        imgUrl: "./assets/img/building/building.svg",
    },
    {
        imgUrl: "./assets/img/building/building.svg",
    },
    {
        imgUrl: "./assets/img/building/building.svg",
    },
    {
        imgUrl: "./assets/img/building/building.svg",
    },
    {
        imgUrl: "./assets/img/building/building.svg",
    },
    {
        imgUrl: "./assets/img/building/building.svg",
    },
    {
        imgUrl: "./assets/img/building/building.svg",
    },
];

const building__content = document.querySelector(".building__content");

building.map(item => {
    building__content.innerHTML += `
    <div class="building__item">
        <img src="${item.imgUrl}" class="building__img">
    </div> 
    `
});

const partner = [
    {
        imgUrl: "./assets/img/partner/image.svg",

    },
    {
        imgUrl: "./assets/img/partner/image.svg",
    },
    {
        imgUrl: "./assets/img/partner/image.svg",
    },
    {
        imgUrl: "./assets/img/partner/image.svg",
    },
    {
        imgUrl: "./assets/img/partner/image.svg"
    },
];

const partner__content = document.querySelector(".partner__content");

partner.map(item => {
    partner__content.innerHTML += `
    <div class="partner__item">
      <img src="${item.imgUrl}" alt="partner" class="partner__img">
    </div>
    `
});

const contact = [
    {
        title: "АДРЕС:",
        imgUrl: "./assets/img/contact/address.svg",
        description: "НЕВСКИЙ ПРОСПЕКТ 140, ОФИС 140-142"
    },
    {
        title: "ТЕЛЕФОН:",
        imgUrl: "./assets/img/contact/phone.svg",
        description: "8 (812) 111-22-33  8 (812) 111-22-33"
    },
    {
        title: "ВРЕМЯ РАБОТЫ:",
        imgUrl: "./assets/img/contact/time.svg",
        description: "ПН-СБ 10:00 - 20:00"
    },
    {
        title: "E-MAIL:",
        imgUrl: "./assets/img/contact/e-mail.svg",
        description: "INFO@VIP.RU"
    },
];
const contact__content = document.querySelector(".contact__content");

contact.map(item => {
    contact__content.innerHTML += `
            <div class="contact__item">
                <img src="${item.imgUrl}" alt="photo" class ="contact__img">
                <h2 class="contact__title">${item.title}</h2>
                <p class="contact__description">${item.description}</p>
            </div>    
            `
});