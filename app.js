document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.navbar-menu');
    const blurOverlay = document.getElementById('blur-overlay');

    menu.addEventListener('click', function () {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
        document.body.classList.toggle('menu-active');
        blurOverlay.classList.toggle('active');
    });

    const revealElements = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries, observer) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);

        visibleEntries.forEach((entry, i) => {
            entry.target.style.transitionDelay = `${i * 0.1}s`;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    });

    revealElements.forEach(el => observer.observe(el));

    window.addEventListener("resize", function () {
        if (window.innerWidth > 960) {
            document.body.classList.remove("menu-active");
            menu.classList.remove('is-active');
            menuLinks.classList.remove('active');
            blurOverlay.classList.remove('active');
        }
    });
    
    const starSwiper = new Swiper('.star-swiper', {
        slidesPerView: 10,
        spaceBetween: 0,
        loop: true,
        allowTouchMove: false,  
        speed: 6500,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
        },
        breakpoints: {
            0:    { slidesPerView: 3 },
            375:  { slidesPerView: 6 },
            480:  { slidesPerView: 7 },
            600:  { slidesPerView: 8 },
            768:  { slidesPerView: 10 },
            900:  { slidesPerView: 6 },
            1024: { slidesPerView: 7 },
            1200: { slidesPerView: 8 },
            1440: { slidesPerView: 10 }
        }
    });
    
    const imageSwiper = new Swiper('.image-swiper', {
        slidesPerView: 7,
        spaceBetween: 20,
        loop: true,  
        allowTouchMove: false,
        speed: 6500,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false,
        },
        breakpoints: {
            0:    { slidesPerView: 2 },
            375:  { slidesPerView: 2 },
            480:  { slidesPerView: 3 },
            600:  { slidesPerView: 4 },
            768:  { slidesPerView: 4 },
            900:  { slidesPerView: 5 },
            1024: { slidesPerView: 5 },
            1200: { slidesPerView: 6 },
            1440: { slidesPerView: 6 }
        }
    });
    
    const sections = [
        'entrees',
        'sides',
        'appetizers',
        'drinks',
        'desserts',
        'rentals'
      ];
      
      sections.forEach(section => {
        new Swiper(`.${section}-swiper`, {
          loop: true,
          navigation: {
            nextEl: `.${section}-swiper .swiper-button-next`,
            prevEl: `.${section}-swiper .swiper-button-prev`,
          },
          pagination: {
            el: `.${section}-swiper .swiper-pagination`,
            clickable: true
          },
          allowTouchMove: true,
          spaceBetween: 20,
          breakpoints: {
            0:    { slidesPerView: 1 },
            375:  { slidesPerView: 1 },
            480:  { slidesPerView: 2 },
            600:  { slidesPerView: 2 },
            768:  { slidesPerView: 2 },
            900:  { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
            1440: { slidesPerView: 4 }
          }
        });
    });

    const menuList = document.getElementById('menuList');
    menuList.getElementsByClassName('list-anchor')[0].onclick = function(evt) {
        if (menuList.classList.contains('visible')) {
            menuList.classList.remove('visible');
        } else {
            menuList.classList.add('visible');
        }
    };

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');

    document.querySelectorAll('.card-image').forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.add('visible');
        });
    });

    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('visible');
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('visible');
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const lightbox = document.querySelector('.lightbox');
            if (lightbox && lightbox.classList.contains('visible')) {
                lightbox.classList.remove('visible');
            }
        }
    });

});