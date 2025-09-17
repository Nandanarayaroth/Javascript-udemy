'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

console.log(document.documentElement)
console.log(document.head)
console.log(document.body)

document.querySelector('.header')
const allSections = document.querySelectorAll('.section')
console.log(allSections)

document.getElementById('section--1')
const allButtons = document.getElementsByTagName('button')
console.log(allButtons)

console.log(document.getElementsByClassName('btn'))

// creating and inserting elements
// .insertAdjacentHTML

// const message = document.createElement('div')
// message.classList.add('cookie-message')

// // message.textContent = 'We use cookied for improved functionality and analytics'
// message.innerHTML = `We use  cookied for improved functionality and analytics. <buttons class="btn btn--close-cookie">Got It</button>`

// header.prepend(message)
// header.append(message)

// document.querySelector('.btn--close--cookie').addEventListener('click', function() {
//     // message.remove()
//     message.parentElement.removeChild(message)
// })

// event

// const h1 = document.querySelector('h1')

// const alrth1 = function (e) {
//     alert('addEventListener: Great! You are reading the heading :D')

//     h1.removeEventListener('mouseenter', alrth1)
// }

// h1.addEventListener('mouseenter', alrth1)

// setTimeout(() => h1.removeEventListener('mouseenter', alrth1), 3000)


// h1.addEventListener('mouseenter', function(e) {
//     alert(`addEventListener: Great! You are reading the heading :D`)
// })

// h1.onmouseenter = function(e) {
//     alert(`onmousenter: Great! You are reading the heading :D`)
// }

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) * min)
// const randomColor = () => ` rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`

// document.querySelector('.nav__link').addEventListener('click', function(e) {
//     this.style.backgroundColor = randomColor()
// })

// document.querySelector('.nav').addEventListener('click', function(e) {
    
// })

// document.querySelectorAll('.nav__link').forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         console.log('LINK')
//     })
// })

// 

document.querySelector('.nav__links').addEventListener('click', function(e) {
    console.log(e.target)

    if(e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href')
        console.log(id)
        document.querySelector(id).scrollIntoView({
            behaviour: 'smooth'
        })
        console.log('LINK')
    }
})

// const h1 = document.querySelector('h1')

// console.log(h1.querySelectorAll('.highlight'))
// console.log(h1.childNodes)
// console.log(h1.children)
// h1.firstElementChild.style.color = 'white'
// h1.lastElementChild.style.color = 'orangered'

// console.log(h1.parentNode)
// console.log(h1.parentElement)

// h1.closest('.header').style.background = 'var(--gradient-secondary)'

// h1.closest('h1').style.background = 'var(--gradient-primary)'

// console.log(h1.previousElementSibling)
// console.log(h1.nextElementSibling)

// console.log(h1.previousSibling)
// console.log(h1.nextSibling)

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(el) {
//     if(el !== h1) el.style.transform = `scale(0.5)`
// })

// Menu fade animation
const nav = document.querySelector('.nav')
nav.addEventListener('mouseover', function(e) {
    if(e.target.classList.contains('nav__link')){
        const link = e.target
        const sibling = link.closest('.nav').querySelector('.nav__link') 
        const logo = link.closest('.nav').querySelector('img')

        sibling.forEach(el => {
            if(el !== link) el.style.opacity = 0.5
        })
        logo.style.opacity = 0.5
    }
})

const handlerHover = function(e, opacity) {
    console.log(this)

    if(e.target.classList.contains('nav__link')){
        const link = e.target
        const sibling = link.closest('.nav').querySelector('.nav__link')
        const logo = link.closest('.nav').querySelector('img')

        sibling.forEach(el => {
            if(el !== link) el.style.opacity = this
        })
        logo.style.opacity = this
    }

}


nav.addEventListener('mouseover', handlerHover.bind(0.5))

const obsCallback = function(entries, observer) {
    entries.forEach(entry => {
        console.log(entry)
    })
}

const obsOption = {
    root: null,
    threshold: 0.1
}

const observer = new IntersectionObserver(obsCallback, obsOption)
observer.observe(Selection)


// slider
const slides = document.querySelector('slide')

const slider = document.querySelector('.slider')

slides.forEach((s, i) => s.style.transform = `translateX(${100 * i}%)`)



