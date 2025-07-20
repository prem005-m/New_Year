// Add this at the top of your script
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('introVideo');
    const videoIntro = document.getElementById('videoIntro');
    const body = document.body;

    // When video ends, hide it and show content
    video.addEventListener('ended', function() {
        videoIntro.style.display = 'none';
        body.classList.add('show-content');
    });

    // If video fails to load, still show content
    video.addEventListener('error', function() {
        videoIntro.style.display = 'none';
        body.classList.add('show-content');
    });

    // For mobile devices where autoplay might be blocked
    let playAttempt = setInterval(() => {
        video.play()
            .then(() => {
                clearInterval(playAttempt);
            })
            .catch(error => {
                console.log('Unable to autoplay, showing content anyway');
                videoIntro.style.display = 'none';
                body.classList.add('show-content');
                clearInterval(playAttempt);
            });
    }, 1000);
});


let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}

// Add dark/light mode toggle
const modeToggle = document.createElement('div');
modeToggle.className = 'mode-toggle';
modeToggle.innerHTML = '🌓';
modeToggle.style.position = 'fixed';
modeToggle.style.top = '20px';
modeToggle.style.right = '20px';
modeToggle.style.fontSize = '24px';
modeToggle.style.cursor = 'pointer';
modeToggle.style.zIndex = '1000';
document.body.appendChild(modeToggle);

modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    modeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});



// Contact Form Functionality
const contactLink = document.querySelector('nav a[href=""]:last-child');
const contactModal = document.getElementById('contactModal');
const closeBtn = document.querySelector('.close-btn');

contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    contactModal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    contactModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        contactModal.style.display = 'none';
    }
});




