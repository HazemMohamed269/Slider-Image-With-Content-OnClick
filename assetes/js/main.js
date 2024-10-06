const hero__banner = document.querySelector(".hero__banner");
const hero__heading = document.querySelector(".hero__banner h1");
const nextBtn = document.querySelector(".hero__banner i:nth-child(3)");
const prevBtn = document.querySelector(".hero__banner i:nth-child(1)");
let imgIndex = 0;

let imageContainer = [{
        urlImage: "2.jpg",
        content: "BMW M3",
    },
    {
        urlImage: "3.jpg",
        content: "BMW X6",
    },
    {
        urlImage: "4.jpg",
        content: "BMW G80",
    },
];

let nextSlider = () => {
    imgIndex++;
    if (imgIndex > imageContainer.length - 1) {
        imgIndex = 0;
    }
    hero__banner.style.backgroundImage = `url(assetes/img/${imageContainer[imgIndex].urlImage})`;
    hero__heading.textContent = `${imageContainer[imgIndex].content}`;
};

let prevSlider = () => {
    imgIndex--;
    if (imgIndex < 0) {
        imgIndex = imageContainer.length - 1;
    }
    hero__banner.style.backgroundImage = `url(assetes/img/${imageContainer[imgIndex].urlImage})`;
    hero__heading.textContent = `${imageContainer[imgIndex].content}`;
};

nextBtn.addEventListener("click", nextSlider);
prevBtn.addEventListener("click", prevSlider);