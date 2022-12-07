const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');


        links.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `linkAnimation 0.5s ease forwards ${index / 7 + 0.6}s`;
            };
        });

        burger.classList.toggle('toggle');

    });

    
    
};
navSlide();