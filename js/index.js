// Your code goes here

//mouseover
let busPicture = document.querySelector('img');
busPicture.addEventListener('mouseover', function(event){
    busPicture.style.filter = 'grayscale(100%)';
    busPicture.style.transition = '1s';
});

//mouseout
busPicture.addEventListener('mouseout', function(event){
    busPicture.style.filter = 'grayscale(0%)';
    busPicture.style.transition = '1s';
});

//keydown
let audio = new Audio('/sounds/Rudy_rooster_crowing-Shelley-1948282641.mp3');
document.addEventListener('keydown', function(event){
    audio.play();
});

//wheel
let intro = document.querySelector('.intro');
intro.addEventListener('wheel', function(event){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    intro.style.color = color;
});

//drag
let text = document.querySelector('.text-content');
text.addEventListener('drag', function(event){
    text.textContent = 'PLEASE DONT DRAG ME';
});

//drop
text.addEventListener('drop', function(event){
    text.textContent = 'You ruined me';
});

//load
// window.addEventListener('load', function(event){
//     alert('Page has finished loading');
// });

//dblclick
images = document.querySelectorAll('img');
for(let i = 0; i < images.length; i++){
    images[i].addEventListener('dblclick', function(event){
        TweenMax.to(images[i], 3, {rotation:360})
        event.target.setAttribute('src', '/img/juan-encalada-6mcVaoGNz1w-unsplash.jpg');
    });
};

//contextmenu
let footer = document.querySelector('.footer p');
footer.addEventListener('contextmenu', function(event){
    event.preventDefault();
    let message = prompt('Enter New Footer Text:');
    footer.textContent = message;
})

//preventing propagation
let aTags = document.querySelectorAll('a');
for(let i = 0; i < aTags.length; i++){
    aTags[i].addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = 'pink';
        event.preventDefault();
        event.stopPropagation();
    })
}
for(let i = 0; i < aTags.length; i++){
    aTags[i].addEventListener('mouseout', function(event){
        event.target.style.backgroundColor = 'white';
        event.preventDefault();
    })
}

let nav = document.querySelector(".nav-container");
nav.addEventListener('mouseover', function(event){
    nav.style.backgroundColor = 'red';
})
nav.addEventListener('mouseout', function(event){
    nav.style.backgroundColor = 'white';
})

