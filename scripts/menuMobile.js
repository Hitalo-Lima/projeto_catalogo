let menuSection = document.querySelector('.menu-section');
let botaoMenu = menuSection.querySelector('.menu-mobile');
let mostrando = true;

botaoMenu.addEventListener('click', () =>{
    if(mostrando){
        document.body.style.overflow = 'hidden';
    }
    else{
        document.body.style.overflow = 'initial';
    }
    menuSection.classList.toggle('on', mostrando);
    mostrando = !mostrando;
})

let links = document.querySelectorAll('.link-page');
console.log(links)
links.forEach(element =>{
    element.addEventListener('click', ()=>{
        menuSection.classList.remove('on');
        document.body.style.overflow = 'initial';
    })
})
