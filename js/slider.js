document.addEventListener('DOMContentLoaded', function() {

    const prevBtn = document.querySelector('.banner-prev');
    const nextBtn = document.querySelector('.banner-next');
    const slides = document.querySelectorAll('.banner-slide');
    let counter = 0;

    // slides[counter].style.left = '0';
    slides[counter].classList.add('banner-slide-active');

    nextBtn.addEventListener('click', function() {
        // slides[counter].style.left = '1500px';
        slides[counter].classList.remove('banner-slide-active');

        if (counter === slides.length-1) {
            // slides[counter].style.left = '1500px';
            counter = 0;
        }else {
            // slides[counter].style.left = '1500px';
            counter++;
        }
        // slides[counter].style.left = '0';
        slides[counter].classList.add('banner-slide-active');

    });

    prevBtn.addEventListener('click', function() {
        slides[counter].classList.remove('banner-slide-active');
        if (counter === 0) {
            counter = slides.length-1;

        }else{
            counter--;
        }
        slides[counter].classList.add('banner-slide-active');
    });
});