var MenuDesplegable = document.getElementById ("Menu-Desplegable")
var show = document.getElementById ("Menu");
MenuDesplegable.addEventListener ("click",function(){
    this.classList.toggle("close");
    show.classList.toggle("show");
})
const typed = new Typed('.typed',{
    strings:[
        '<i class="Palabra">Solos?</i>',
        '<i class="Palabra">Sozinho?</i>',
        '<i class="Palabra">Seule?</i>',
        '<i class="Palabra">Alone?</i>'
    ]    
})