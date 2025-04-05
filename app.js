const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 960) {
        document.body.classList.remove("menu-active");
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    }
});

document.getElementById("mobile-menu").addEventListener("click", function () {
    document.body.classList.toggle("menu-active");
});

