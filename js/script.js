const cadeado = document.querySelector('#restrita')

function abre_cadeado_hover(){
    cadeado.querySelector('.bi').classList.toggle('bi-unlock2')
    cadeado.querySelector('.bi').classList.toggle('bi-lock')
}

cadeado.addEventListener('mouseenter', abre_cadeado_hover)
cadeado.addEventListener('mouseleave', abre_cadeado_hover)