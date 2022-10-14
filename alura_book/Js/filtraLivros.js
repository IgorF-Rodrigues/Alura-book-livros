const botoes = document.querySelectorAll('.btn');

botoes.forEach(botao => {
    
    botao.addEventListener('click', () => {
        bannerValorTotal.classList.add('invisivel');

        let listaDeLivros = livros;

        let livrosFiltrados = listaDeLivros.filter((listaDeLivros) => {
            return listaDeLivros.categoria == botao.value;
        })

        secaoLivros.innerHTML = '';
        mostraLivros(livrosFiltrados);
        
    })
})