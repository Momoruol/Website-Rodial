const cadeado = document.querySelector('#restrita')

function abre_cadeado_hover(){
    cadeado.querySelector('.bi').classList.toggle('bi-unlock2')
    cadeado.querySelector('.bi').classList.toggle('bi-lock')
}

cadeado.addEventListener('mouseenter', abre_cadeado_hover)
cadeado.addEventListener('mouseleave', abre_cadeado_hover)


//Pesquisa aba manuais
document.getElementById('inputBusca').addEventListener('input', function(e) {
    const termo = e.target.value.toLowerCase();
    const categorias = document.querySelectorAll('.category-group');

    categorias.forEach(categoria => {
        const itens = categoria.querySelectorAll('.manual-item');
        let encontrouNaCategoria = false;

        itens.forEach(item => {
            const nome = item.textContent.toLowerCase();
            const ref = item.getAttribute('data-ref').toLowerCase();
            
            // Verifica se o termo existe no nome ou na referência
            const corresponde = nome.includes(termo) || ref.includes(termo);

            // toggle(classe, boolean): se true adiciona, se false remove
            if (corresponde) {
                item.style.setProperty('display', 'flex', 'important');
                encontrouNaCategoria = true;
            } else {
                item.style.setProperty('display', 'none', 'important');
            }
        });

        // Esconde a categoria (accordion-item) se não houver filhos visíveis
        categoria.style.display = encontrouNaCategoria ? 'block' : 'none';
        
        // Abre o accordion se houver texto na busca e resultados
        if (termo.length > 0 && encontrouNaCategoria) {
            const collapseEl = categoria.querySelector('.accordion-collapse');
            const bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapseEl, { toggle: false });
            bsCollapse.show();
        }
    });
});