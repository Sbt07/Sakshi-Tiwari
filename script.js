let navbar = document.querySelector('.navbar');
let menubtn = document.querySelector('#menu-btn');

menubtn.onclick = () => {
    menubtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var swiper = new Swiper(".course-slider", {
    grabCursor: true,
    loop:true,
    centeredSlides:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableonInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
}); 
var swiper = new Swiper(".circuits-slider", {
    grabCursor: true,
    loop:true,
    centeredSlides:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableonInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
}); 

function toggleWorkItems() {
    const workItems = document.querySelectorAll('.hidden');
    workItems.forEach(item => item.classList.remove('hidden'));
    }
    
    // Add an event listener to the "See More" button
    const seeMoreButton = document.querySelector('#see');
    if (seeMoreButton) {
    seeMoreButton.addEventListener('click', function (event) {
    event.preventDefault();
    toggleWorkItems();
    this.style.display = 'none';
});
}

var swiper = new Swiper(".mini-slider", {
    grabCursor: true,
    loop:true,
    centeredSlides:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3500,
        disableonInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        468:{
            slidesPerView: 3,
            spaceBetween: 10,
        },
        700: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1000: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
}); 