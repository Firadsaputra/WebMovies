// Swiper sesuikan dengan nama class swiper kamu, ambil kode diwbawah di https://swiperjs.com/demos#autoplay
var swiper = new Swiper(".popular-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
    delay: 755500,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        510: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        758: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

// Show Video 
let playButton = document.querySelector('.play-movie');
let video = document.querySelector('.video-container');
let myvideo = document.querySelector('#myvideo');
let closebtn = document.querySelector('.close-video');
// masukan script swiper : <script src="js/swiper-bundle.min.js"></script>
playButton.onclick = () => {
    video.classList.add('show-video');
    // Autoplay When on click play button
    myvideo.play();
}
closebtn.onclick = () => {
    video.classList.remove('show-video');
    // Pause when video close
    myvideo.pause();
}


// End Show Video