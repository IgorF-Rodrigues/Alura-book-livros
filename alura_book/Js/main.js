let livros = [];
const api = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

carregaApi()

async function carregaApi() {
    const livrosObj = await fetch(api);
    livros = await livrosObj.json();
    
    let livrosComDesconto = promocao(livros);

    mostraLivros(livrosComDesconto);
}
