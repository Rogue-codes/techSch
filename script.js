const menu = document.querySelector('.menu')

const toggle = document.querySelector('.toggle')

const closebtn = document.querySelector('.closebtn')



toggle.addEventListener('click', ()=>{
    menu.style.left = '0%'
    toggle.style.display = 'none'
})

closebtn.addEventListener('click', ()=>{
    menu.style.left = '-100%'
    toggle.style.display = 'block'
})