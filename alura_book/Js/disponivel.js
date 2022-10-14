const disponivel = document.querySelector('.btn-disponiveis'); 
const bannerValorTotal = document.querySelector('.livros__disponiveis');
const valorTotal = document.getElementById('valor');

disponivel.addEventListener('click', () => {
    let livrosLista = livros;

    const livrosDisponiveis = livrosLista.filter((livros) => {
        return livros.quantidade > 0;
    })
    mostraLivros(livrosDisponiveis);

    bannerValorTotal.classList.remove('invisivel');

    const LivrosValorTotal = livrosDisponiveis.reduce((acumulator, livrosDisponiveis) => {
        return acumulator + livrosDisponiveis.preco;
    }, 0);

    valorTotal.innerHTML = LivrosValorTotal.toFixed(2);
    
})