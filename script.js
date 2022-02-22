const menu = document.querySelector('.menu')

const toggle = document.querySelector('.toggle')

const closebtn = document.querySelector('.closebtn')

const fixedBtn = document.querySelector('.btn')

const fixedBtn2 = document.querySelector('.btn2')



toggle.addEventListener('click', ()=>{
    menu.style.left = '0%'
    toggle.style.display = 'none'
})

closebtn.addEventListener('click', ()=>{
    menu.style.left = '-100%'
    toggle.style.display = 'block'
})

window.addEventListener('load', ()=>{
    fixedBtn.classList.add('fixed')
    console.log('reload')
})

window.addEventListener('load', ()=>{
    fixedBtn2.classList.add('fixed2')
    console.log('reload')
})