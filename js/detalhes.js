// Script para a página de detalhes do projeto

$(document).ready(function() {
    // Obter o ID do projeto da URL ou sessionStorage
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id') || sessionStorage.getItem('selectedProject') || 1;
    
    // Dados dos projetos (em um cenário real, esses dados viriam de uma API ou banco de dados)
    const projectsData = {
        '1': {
            title: 'Linha Automática',
            category: 'Automação Industrial',
            client: 'Indústria Metalúrgica ABC',
            date: 'Janeiro, 2024',
            location: 'Porto Alegre, RS',
            description: `
                <p>Nossa linha automática representa o estado da arte em automação industrial, projetada para maximizar a eficiência e reduzir custos operacionais em ambientes de produção intensivos.</p>
                <p>Este sistema integrado combina robótica avançada, sensores de alta precisão e software inteligente para criar um fluxo de trabalho contínuo que minimiza o tempo de inatividade e maximiza a produtividade. Cada componente foi cuidadosamente selecionado e calibrado para trabalhar em perfeita harmonia, resultando em uma solução verdadeiramente holística para desafios industriais complexos.</p>
                <p>A flexibilidade é uma característica central deste projeto, permitindo ajustes rápidos para diferentes produtos ou volumes de produção. Os sistemas de controle intuitivos permitem que os operadores monitorem todos os aspectos da linha de produção a partir de uma única interface, com painéis personalizáveis que destacam as métricas mais importantes para cada função.</p>
                <p>Os benefícios comprovados incluem redução de 35% nos custos de mão de obra, aumento de 40% na produtividade e diminuição significativa nos índices de defeitos e retrabalho, resultando em um retorno sobre o investimento tipicamente alcançado em menos de 24 meses.</p>
            `
        },
        '2': {
            title: 'Linha Galvânica',
            category: 'Tratamento de Superfícies',
            client: 'Indústria Metalúrgica XYZ',
            date: 'Março, 2024',
            location: 'Caxias do Sul, RS',
            description: `
                <p>Nossa linha de galvanoplastia representa o mais alto padrão em tratamento de superfícies metálicas, combinando processos químicos precisos com controle automatizado para resultados consistentes e de alta qualidade.</p>
                <p>Este sistema foi projetado para oferecer versatilidade excepcional, podendo acomodar diversos tipos de revestimentos metálicos, incluindo níquel, cromo, zinco, cobre e ligas especiais. A linha utiliza tanques de imersão sequenciais com sistemas de movimentação automatizados que garantem tempos precisos de processamento e transferência suave entre etapas.</p>
                <p>O coração da linha é nosso sistema de controle proprietário, que monitora constantemente parâmetros críticos como temperatura, pH, concentração de produtos químicos e densidade de corrente. Isso garante que cada peça receba o tratamento ideal, reduzindo variações e maximizando a durabilidade e aparência do revestimento final.</p>
                <p>Nosso compromisso com a sustentabilidade é evidenciado pelos sistemas integrados de tratamento de efluentes e recuperação de metais, que minimizam o impacto ambiental enquanto recuperam materiais valiosos para reutilização. Esta abordagem não apenas atende aos mais rigorosos padrões ambientais, mas também reduz significativamente os custos operacionais ao longo do tempo.</p>
            `
        },
        '3': {
            title: 'Linha de Pintura',
            category: 'Acabamento Superficial',
            client: 'Grupo Industrial DEF',
            date: 'Fevereiro, 2024',
            location: 'Novo Hamburgo, RS',
            description: `
                <p>Nossa linha de pintura industrial representa a convergência entre tecnologia avançada e precisão artesanal, oferecendo acabamentos superficiais que combinam estética impecável com proteção duradoura.</p>
                <p>O sistema incorpora preparação de superfície automatizada, incluindo desengraxe, fosfatização e outras etapas de pré-tratamento químico, garantindo aderência perfeita e resistência à corrosão. A cabine de pintura utiliza tecnologia de pulverização eletrostática de última geração, que proporciona cobertura uniforme com uso eficiente de tinta, reduzindo desperdícios e emissões.</p>
                <p>Para completar o processo, nossa linha inclui estufas de cura com controle preciso de temperatura, garantindo que cada revestimento atinja suas propriedades físicas e químicas ideais. O sistema de transporte sincronizado mantém o fluxo ideal de produção, permitindo processamento contínuo de peças de diferentes tamanhos e geometrias.</p>
                <p>Nosso software de gerenciamento de cores assegura consistência perfeita entre lotes, com capacidade para armazenar e recuperar milhares de formulações. Isto é complementado por um rigoroso sistema de controle de qualidade que inclui medição digital de espessura, aderência, brilho e resistência a impactos, garantindo que cada peça atenda às especificações exatas dos clientes.</p>
            `
        },
        '4': {
            title: 'Linha de Tratamento',
            category: 'Tratamento Térmico',
            client: 'Metalúrgica GHI',
            date: 'Abril, 2024',
            location: 'Sapiranga, RS',
            description: `
                <p>Nossa linha de tratamento térmico representa a excelência em modificação controlada das propriedades dos materiais, permitindo otimizar características como dureza, resistência, tenacidade e usinabilidade.</p>
                <p>Este sistema avançado incorpora fornos de precisão com zonas de aquecimento múltiplas que garantem uniformidade térmica em toda a câmara. O controle computadorizado permite a criação de perfis térmicos complexos necessários para tratamentos como têmpera, revenimento, normalização, recozimento e alívio de tensões.</p>
                <p>A automação completa do processo, desde o carregamento até o resfriamento controlado, elimina variações causadas por intervenção manual. Os sistemas de resfriamento utilizam meios diversos, incluindo óleos especiais, polímeros, água e gases inertes, cada um selecionado para atingir taxas específicas de resfriamento necessárias para diferentes materiais e aplicações.</p>
                <p>Nossa linha integra monitoramento contínuo através de termopares calibrados e sistemas de registro que documentam cada ciclo térmico para rastreabilidade completa. Esta capacidade é complementada por testes não destrutivos e análises metalográficas que validam os resultados, assegurando que as peças processadas atendam às mais rigorosas especificações da indústria.</p>
            `
        },
        '5': {
            title: 'Linha Customizada',
            category: 'Soluções Especiais',
            client: 'Indústria JKL',
            date: 'Maio, 2024',
            location: 'Canoas, RS',
            description: `
                <p>Nossa abordagem para linhas customizadas representa o ápice da engenharia personalizada, onde cada sistema é projetado desde o início para atender às necessidades específicas e desafios únicos de cada cliente.</p>
                <p>O processo começa com uma análise aprofundada dos requisitos de produção, limitações de espaço, objetivos de eficiência e padrões de qualidade. Nossa equipe de engenheiros trabalha em estreita colaboração com os clientes para desenvolver soluções que não apenas atendam às necessidades atuais, mas também se adaptem a futuras mudanças nos requisitos de produção.</p>
                <p>Utilizamos modelagem 3D avançada e simulações de processo para visualizar e otimizar o sistema antes da fabricação, reduzindo significativamente o tempo de implementação e os riscos associados. Esta abordagem permite ajustes precisos que maximizam a eficiência do fluxo de trabalho, ergonomia do operador e utilização do espaço.</p>
                <p>O resultado final é uma solução verdadeiramente única, que incorpora o melhor da automação, controle de processo e design ergonômico. Nossos clientes valorizam especialmente a capacidade de integrar suas necessidades específicas em sistemas que aumentam a produtividade, melhoram a qualidade e reduzem os custos operacionais de maneiras que soluções padronizadas simplesmente não conseguem igualar.</p>
            `
        },
        '6': {
            title: 'Automação Industrial',
            category: 'Controle de Processos',
            client: 'Grupo Industrial MNO',
            date: 'Junho, 2024',
            location: 'Gravataí, RS',
            description: `
                <p>Nossos sistemas de automação industrial representam a fusão perfeita entre hardware robusto e software inteligente, criando ambientes produtivos que operam com precisão, consistência e eficiência máximas.</p>
                <p>Cada solução é construída sobre uma arquitetura modular que utiliza controladores lógicos programáveis (CLPs), interfaces homem-máquina intuitivas e redes industriais de alta velocidade para criar um sistema coeso e responsivo. Integramos tecnologias como visão computacional, sensores avançados e atuadores de precisão para automatizar tarefas complexas que anteriormente dependiam de intervenção humana.</p>
                <p>Nossa abordagem à indústria 4.0 incorpora análise de dados em tempo real, permitindo que as máquinas não apenas executem tarefas programadas, mas também aprendam e se adaptem às condições variáveis. Isto resulta em otimização contínua, manutenção preditiva e resposta automática a desvios de processo.</p>
                <p>O valor transformador destes sistemas é evidente nos resultados mensuráveis: aumento da produção, redução de desperdício, qualidade consistente e ambientes de trabalho mais seguros. Além disso, a coleta e análise abrangente de dados fornecem insights valiosos que impulsionam melhorias contínuas e decisões estratégicas baseadas em evidências concretas.</p>
            `
        }
    };
    
    // Carregar os dados do projeto selecionado
    const projectData = projectsData[projectId];
    
    if (projectData) {
        // Atualizar o título da página
        document.title = projectData.title + ' - IBA';
        
        // Preencher os dados na página
        $('#projectTitle').text(projectData.title);
        $('#projectDescription').html(projectData.description);
        $('#projectCategory').text(projectData.category);
        $('#projectClient').text(projectData.client);
        $('#projectDate').text(projectData.date);
        $('#projectLocation').text(projectData.location);
        
        // Define a imagem de fundo do banner
        $('.project-banner').css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("img/carrosel-1.jpg")');
        
        // Animar elementos da galeria
        setTimeout(function() {
            $('.gallery-item').each(function(index) {
                var item = $(this);
                setTimeout(function() {
                    item.addClass('animated');
                }, 150 * index);
            });
        }, 500);
    } else {
        // Caso o projeto não exista
        $('#projectTitle').text('Projeto não encontrado');
        $('#projectDescription').html('<p>Desculpe, não conseguimos encontrar o projeto solicitado.</p>');
    }
    
    // Efeito de hover nos itens da galeria em dispositivos móveis
    if ($(window).width() < 768) {
        $('.gallery-image').on('click', function() {
            $('.gallery-overlay').css('opacity', '0');
            $(this).find('.gallery-overlay').css('opacity', '1');
        });
    }
    
    // Rolagem suave para seção de contato
    $('a[href="#contact-section"]').on('click', function(e) {
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });
    
    // Envio do formulário
    $('.contact-form').on('submit', function(e) {
        e.preventDefault();
        
        // Aqui você adicionaria o código para enviar o formulário via AJAX
        alert('Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.');
        
        // Limpar formulário
        $(this)[0].reset();
    });
});