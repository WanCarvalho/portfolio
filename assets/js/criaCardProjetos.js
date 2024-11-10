let dataProjetos = [
    {
        "titulo": "SOST",
        "descricao": "Sistema de gestão de pessoas no que tange a vigilância, segurança e saúde do trabalhador da rede SESAP.",
        "companhia": "Sesap/RN & Instituto Metrópole Digital",
        "tecnologias": ["Laravel", "PHP", "JQuery", "Javascript", "PostgreSQL", "Ajax"],
        "imagem": "./assets/img/sost.png"
    },
    {
        "titulo": "Todo List",
        "descricao": "Lista de tarefas implementada com VueJs.",
        "companhia": "Projeto Pessoal",
        "tecnologias": ["VueJs", "JavaScript", "CSS", "HTML"],
        "imagem": "./assets/img/todo-vuejs.png"
    },
    {
        "titulo": "Tindog App",
        "descricao": "Landing-page para apresentar app de par romântico para PET.",
        "companhia": "Projeto Pessoal",
        "tecnologias": ["HTML", "CSS", "JavaScript"],
        "imagem": "./assets/img/post tindog.png",
        "link": "https://wancarvalho.github.io/tin-dog/"
    }
];

// Função para criar o card
function criarCard(info) {
    const pathImg = info.imagem || './assets/img/default.png';

    const empresaLink = 
        `<span class="card-text text-start">${info.companhia}</span>`;

    // Criar os badges de tecnologias
    const tecnologiasHtml = info.tecnologias.map(tecnologia => 
        `<span class="badge text-bg-secondary">${tecnologia}</span>`
    ).join(' ');

    // Condicional para exibir o título como link, se o link existir
    const tituloHtml = info.link ? 
        `<a href="${info.link}" target="_blank" class="card-title">${info.titulo}</a>` : 
        `<h5 class="card-title">${info.titulo}</h5>`;

    // Criar o HTML do card
    const cardHtml = `
    <div class="col mb-4">
        <div class="card h-100">
            <img src="${pathImg}" class="card-img-top" alt="${info.titulo}">
            <div class="card-header">
                ${tecnologiasHtml}
            </div>
            <div class="card-body">
                ${tituloHtml}
                <p class="card-text">${info.descricao}</p>
            </div>
            <div class="card-footer">
                <small class="text-body-secondary">${empresaLink}</small>
            </div>
        </div>
    </div>
    `;
    return cardHtml;
}

// Função para renderizar todos os cards
function renderizarCardsProjetos() {
    const container = document.getElementById('card-projetos-container');
    dataProjetos.forEach(info => {
        const card = criarCard(info);
        container.innerHTML += card; // Adiciona o card no container
    });
}

// Chama a função para carregar os dados e renderizar os cards
renderizarCardsProjetos();
