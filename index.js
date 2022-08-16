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

const contrast = document.querySelector('.contrast')
const contrastOut = document.querySelector('.contrast-output')

const saturate = document.querySelector('.saturate')
const saturateOut = document.querySelector('.saturate-output')

const code = document.querySelector('.code')


let colorRgb = '255, 255, 255'
let inRgb;


const hexToRgb = function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
      //a: 1,
    } : null; 
}

let opacidad = 1
let difuminado = 0
let saturacion = 100
let contraste = 100

opacity.addEventListener('input', (e)=>{
    let actualOpacity = []
    box.style.background =`rgba(255, 255, 255, ${0.01 * e.target.value})`
    actualOpacity.push(0.01 * e.target.value)
    opacityOut.value = `${e.target.value}%`
    opacidad = actualOpacity
    code.innerHTML = `<div>
    background: rgba(${colorRgb}, ${0.01 * e.target.value});
    </div>
    `
    
});

  
color.addEventListener('input', (e)=>{
  //let actualOpacity = opacidad.join('')
  //console.log(actualOpacity);
  let actualColor = hexToRgb(e.target.value)
  //console.log(hexToRgb(color.value));
  colorRgb = Object.values(actualColor).join(', ')
  let colores = `rgba(${colorRgb}, ${opacidad})`
  box.style.background = colores//`${e.target.value}`
 console.log(colores);
 code.innerHTML = `  
 <div>
 .glass{
 <br>
     background: rgba(${colorRgb}, ${opacidad});
 <br>
     backdrop-filter: blur(${difuminado}px);
 <br>
     backdrop-filter: contrast(${contraste}%);
 <br>
     backdrop-filter: saturate(${saturacion}%);
 <br>
 }
 </div>
 `  
});

opacity.addEventListener('input', (e)=>{
    box.style.background =`rgba(${colorRgb}, ${0.01 * e.target.value})`
    opacityOut.value = `${e.target.value}%`
    code.innerHTML = `  
    <div>
    .glass{
    <br>
        background: rgba(${colorRgb}, ${opacidad});
    <br>
        backdrop-filter: blur(${difuminado}px);
    <br>
        backdrop-filter: contrast(${contraste}%);
    <br>
        backdrop-filter: saturate(${saturacion}%);
    <br>
    }
    </div>
    `  
});


blur.addEventListener('input', (e)=>{
    box.style.backdropFilter = `Blur(${e.target.value}px) contrast(${contraste}%) saturate(${saturacion}%)`
    box.style.webkitBackdropFilter = `Blur(${e.target.value}px) contrast(${contraste}%) saturate(${saturacion}%)`
    blurOut.value = `${e.target.value}px`
    difuminado = e.target.value
    code.innerHTML = `  
    <div>
    .glass{
    <br>
        background: rgba(${colorRgb}, ${opacidad});
    <br>
        backdrop-filter: blur(${difuminado}px);
    <br>
        backdrop-filter: contrast(${contraste}%);
    <br>
        backdrop-filter: saturate(${saturacion}%);
    <br>
    }
    </div>
    `  
});


contrast.addEventListener('input', (e)=>{
    box.style.backdropFilter = `Blur(${difuminado}px) contrast(${e.target.value}%) saturate(${saturacion}%)`
    box.style.webkitBackdropFilter = `Blur(${difuminado}px) contrast(${e.target.value}%) saturate(${saturacion}%)`
    contrastOut.value = `${e.target.value}%`
    contraste = e.target.value
    code.innerHTML = `  
    <div>
    .glass{
    <br>
        background: rgba(${colorRgb}, ${opacidad});
    <br>
        backdrop-filter: blur(${difuminado}px);
    <br>
        backdrop-filter: contrast(${contraste}%);
    <br>
        backdrop-filter: saturate(${saturacion}%);
    <br>
    }
    </div>
    `  
});


saturate.addEventListener('input', (e)=>{
    box.style.backdropFilter = `Blur(${difuminado}px) contrast(${contraste}%) saturate(${e.target.value}%)`
    box.style.webkitBackdropFilter = `Blur(${difuminado}px) contrast(${contraste}%) saturate(${e.target.value}%)`
    saturateOut.value = `${e.target.value}%`
    saturacion = e.target.value
    code.innerHTML = `  
    <div>
    .glass{
    <br>
        background: rgba(${colorRgb}, ${opacidad});
    <br>
        backdrop-filter: blur(${difuminado}px);
    <br>
        backdrop-filter: contrast(${contraste}%);
    <br>
        backdrop-filter: saturate(${saturacion}%);
    <br>
    }
    </div>
    `  
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

