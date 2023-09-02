// ======================= RESPONSIVE ======================//

const navList = document.querySelector('.navlist');
const menuBtn = document.querySelector('.ri-menu-line');

menuBtn.onclick = function(){
    navList.classList.toggle('active');
    menuBtn.classList.toggle('ri-arrow-up-double-line');
}


// =======================FIXED NAVBAR =====================//

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle("scrolling",scrollY > 50)
})

// =======================  CHANGE TEXT =====================//

let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    })
}) 

let currentWordIndex = 0;
let maxWordIndex = words.length -1 ;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex]
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";

        },340 + i * 80);
    })
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;

};

changeText();
setInterval(changeText,3000)


// =====================>  Portfolio <===========================//

var portfolioTabs = document.getElementsByClassName('portfolio-tab');
var tabContents = document.getElementsByClassName('tab-content');

function tabOpen(x){
    for(portfolioTab of portfolioTabs){
        portfolioTab.classList.remove('active');
    }
    for(tabContent of tabContents){
        tabContent.classList.remove('active-content');
    }
    event.currentTarget.classList.add('active');
    document.getElementById(x).classList.add('active-content');
}  

// =====================>  THEME TOGGLE <===========================//

let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = function(){
    themeBtn.classList.toggle('ri-sun-line');
    if(themeBtn.classList.contains('ri-sun-line')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active')
    }
}


// =======================  SCROLL ANIMATION =====================//

 const sr = ScrollReveal({
     distance: '80px',
     duration: 2500,
    delay: 200,
     reset: true,
 });
 sr.reveal('.home-container .left', {origin: 'top'});
 sr.reveal('.home-container .right', {origin: 'left'});
 sr.reveal('.about-container .right', {origin: 'top'});
 sr.reveal('.about-container .left', {origin: 'left'});
 sr.reveal('.services-container', {origin: 'bottom'});
 sr.reveal('.portfolio-container', {origin: 'left'});
 sr.reveal('.portfolio-buttons', {origin: 'top'});
sr.reveal('.contact-content', {origin: 'right'});
sr.reveal('.copyright', {origin: 'bottom'});