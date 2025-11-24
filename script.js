let cardContainer = document.querySelector('.card-container');
let dados = [];

async function iniciarBuscar() {
    let input = document.querySelector('input').value.toLowerCase();
    
    if (dados.length === 0) {
        let resposta = await fetch('data.json');
        dados = await resposta.json();
    }

    let dadosFiltrados = dados.filter(dado => 
        dado.nome.toLowerCase().includes(input) || 
        dado.descricao.toLowerCase().includes(input)
    );

    renderizarCards(dadosFiltrados);
}

function renderizarCards(dados) {
    cardContainer.innerHTML = '';
    for (let dado of dados) {
        let article = document.createElement('article');
        article.classList.add('card');
        article.innerHTML = `
            <h2>${dado.nome}</h2>
            <p>${dado.data_criacao}</p>
            <p>${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Saiba mais sobre ${dado.nome}</a>
        
        `

        cardContainer.appendChild(article);
    }
}
