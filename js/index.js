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
        event.target.setAttribute('src', '/img/juan-encalada-6mcVaoGNz1w-unsplash.jpg');
    });
};

//select
// let footer = document.querySelector('.footer');
// footer.addEventListener('mouseover', function(event){
//     footer.textContent("Copyright Forever")
//     console.log('mouse over')
// })

