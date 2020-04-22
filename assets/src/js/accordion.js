//Feature accordion
'use strict'
//Variables 
//BAR
const bar1 = document.getElementById('bar1')
const bar2 = document.getElementById('bar2')
const bar3 = document.getElementById('bar3')
const bar4 = document.getElementById('bar4')
const bar5 = document.getElementById('bar5')
//BODY_ITEM
const body1 = document.getElementById('body1')
const body2 = document.getElementById('body2')
const body3 = document.getElementById('body3')
const body4 = document.getElementById('body4')
const body5 = document.getElementById('body5')

bar1.onclick = () => {
    bar1.classList.add('feature__bar__item--active')
    bar2.classList.remove('feature__bar__item--active')            
    bar3.classList.remove('feature__bar__item--active')            
    bar4.classList.remove('feature__bar__item--active')            
    bar5.classList.remove('feature__bar__item--active') 

    body1.classList.add('feature__body__item--active')           
    body2.classList.remove('feature__body__item--active')           
    body3.classList.remove('feature__body__item--active')           
    body4.classList.remove('feature__body__item--active')           
    body5.classList.remove('feature__body__item--active')           
}

bar2.onclick = () => {
    bar1.classList.remove('feature__bar__item--active')
    bar2.classList.add('feature__bar__item--active')            
    bar3.classList.remove('feature__bar__item--active')            
    bar4.classList.remove('feature__bar__item--active')            
    bar5.classList.remove('feature__bar__item--active') 

    body1.classList.remove('feature__body__item--active')           
    body2.classList.add('feature__body__item--active')           
    body3.classList.remove('feature__body__item--active')           
    body4.classList.remove('feature__body__item--active')           
    body5.classList.remove('feature__body__item--active')           
}