let data = [
    {
        "funcao": "Desenvolvedor Backend PHP",
        "modalidade": "Estágio",
        "companhia": "Maxmeio Tecnologia",
        "local": "Natal, RN",
        "modalidade_trabalho": "Presencial",
        "data_inicio": "Agosto de 2024",
        "data_fim": "atualmente",
        "path_img_empresa": "./assets/img/empresas/maxmeio_tecnologia_logo.jpg",
        "url_site_empresa": "https://www.maxmeio.com/",
    },
    {
        "funcao": "Desenvolvedor Backend PHP",
        "modalidade": "Meio Período",
        "companhia": "InoDev Tecnologia",
        "local": "Natal, RN",
        "modalidade_trabalho": "Híbrido",
        "data_inicio": "Julho de 2024",
        "data_fim": "Agosto de 2024",
        "path_img_empresa": "./assets/img/empresas/inodev_empresa.jpg",
    },
    {
        "funcao": "Desenvolvedor Backend PHP",
        "modalidade": "Meio Período",
        "companhia": "Metrópole Digital / Sesap-RN",
        "local": "Natal, RN",
        "modalidade_trabalho": "Remoto",
        "data_inicio": "Setembro de 2023",
        "data_fim": "Outubro de 2024",
        "path_img_empresa": "./assets/img/empresas/metropoledigital_logo.jpg",
        "url_site_empresa": "https://www.metropoledigital.ufrn.br/portal/",
    }
];

// Função para criar o card
function criarCard(info) {
    const pathImg = info.path_img_empresa || 'path_to_default_image.jpg';
    const urlEmpresa = info.url_site_empresa || null;

    const empresaLink = urlEmpresa ? `<a class="card-text text-start" href="${urlEmpresa}" target="_blank">${info.companhia}</a>` : `<span class="card-text text-start">${info.companhia}</span>`;

    // Criar o HTML do card
    const cardHtml = `
    <div class="card mb-4" style="width: 70vw;">
        <div class="card-body">
            <div class="row">
                <div class="col-6">
                    <h5 class="card-title text-start">${info.funcao} <span class="card-title badge text-bg-secondary text-end">${info.modalidade}</span></h5>
                    <div class="row">
                        <div class="col-md-3 col-sm-6 d-flex justify-content-center align-items-center">
                            <img src="${pathImg}" alt="Imagem Empresa" style="max-width: 50px; height: auto;">
                        </div>
                        <div class="col-md-9 col-sm-6">
                            ${empresaLink}
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <p class="card-text text-end">${info.data_inicio} - ${info.data_fim}</p>
                </div>
            </div>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${info.local} - ${info.modalidade_trabalho}</li>
        </ul>
    </div>
`;
    return cardHtml;
}

// Função para renderizar todos os cards
function renderizarCardsExperiencias() {
    const container = document.getElementById('card-experiencias-container');
    data.forEach(info => {
        const card = criarCard(info);
        container.innerHTML += card; // Adiciona o card no container
    });
}

// Chama a função para carregar os dados e renderizar os cards
renderizarCardsExperiencias();
