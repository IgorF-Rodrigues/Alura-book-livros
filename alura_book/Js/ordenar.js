const botaoDisponivel = document.querySelector('.btn-ordenacao');

botaoDisponivel.addEventListener('click', () => {
    let listaDeLivros = livros;

    listaDeLivros.sort((a, b) => {
        return a.preco - b.preco
    });
    
    mostraLivros(listaDeLivros);
})
