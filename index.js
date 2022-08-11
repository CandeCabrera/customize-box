//! DOM ELEMENTS

const box = document.querySelector('.box')

const color = document.querySelector('.color')

const opacity = document.querySelector('.opacity')
const opacityOut = document.querySelector('.opacity-output')

const blur = document.querySelector('.blur')
const blurOut = document.querySelector('.blur-output')

const size = document.querySelector('.size')
const sizeOut = document.querySelector('.size-output')

const radius = document.querySelector('.radius')
const radiusOut = document.querySelector('.radius-output')



color.addEventListener('input', (e)=>{
  box.style.background = e.target.value
  
});

opacity.addEventListener('input', (e)=>{
  box.style.opacity =`${e.target.value}%`
  opacityOut.value = `${e.target.value}%`
});

blur.addEventListener('input', (e)=>{
    box.style.filter = `Blur(${e.target.value}px)`
    blurOut.value = `${e.target.value}px`
});


size.addEventListener('input', (e)=>{
    box.style.width = `${e.target.value}px`
    box.style.height = `${e.target.value}px`
    sizeOut.value = `${e.target.value}px`
});

radius.addEventListener('input', (e)=>{
    box.style.borderRadius = `${e.target.value}px`
    radiusOut.value = `${e.target.value}px`
});











//! template litarals `````````````