// Objeto com as traduções para português, inglês e espanhol
const translations = {
    'pt-BR': {
        'inicio': 'Início',
        'sobre-nos': 'Sobre Nós',
        'linhas': 'Linhas',
        'catalogo': 'Catálogo',
        'contato': 'Contato',
        'nossos-projetos': 'NOSSOS PROJETOS!',
        'projetos-subtitulo': 'Algum subtítulo',
        'anterior': 'Anterior',
        'proximo': 'Próximo',
        'tecnologia-titulo': 'TECNOLOGIA E CONFIANÇA<br>QUE MOVEM A INDÚSTRIA',
        'tecnologia-texto': 'Cada equipamento é projetado para <strong>DURAR</strong>,<br><strong>PERFORMAR</strong>, e <strong>TRANSFORMAR</strong><br>a sua linha de produção.',
        'sobre-nos-btn': 'SOBRE NÓS',
        'nossos-produtos': 'NOSSOS PRODUTOS!',
        'produtos-subtitulo': 'Algum subtítulo',
        'ver-mais': 'VER MAIS',
        'cta-titulo': 'PRONTO PARA MODERNIZAR SUA LINHA DE PRODUÇÃO?',
        'cta-texto': 'Solicite um orçamento agora mesmo com a equipe técnica da IBA!',
        'fale-conosco': 'FALE CONOSCO',
        'nossos-clientes': 'ALGUNS DE NOSSOS CLIENTES',
        'footer-texto': 'Transformando a indústria com tecnologia e inovação. Soluções personalizadas para sua linha de produção.',
        'footer-contato': 'Contato',
        'footer-endereco': 'Endereço da empresa, Cidade - Estado',
        'footer-telefone': '(00) 0000-0000',
        'footer-email': 'contato@iba.com.br',
        'footer-links': 'Links Rápidos',
        'footer-inicio': 'Início',
        'footer-sobre': 'Sobre Nós',
        'footer-produtos': 'Produtos',
        'footer-contato-link': 'Contato',
        'copyright': '© 2024 IBA. Todos os direitos reservados.',
        'desenvolvido': 'Desenvolvido por André Haubert',
        'translation-notice': 'Este site está disponível em 3 idiomas. Clique no seletor acima para mudar.'
    },
    'en': {
        'inicio': 'Home',
        'sobre-nos': 'About Us',
        'linhas': 'Lines',
        'catalogo': 'Catalog',
        'contato': 'Contact',
        'nossos-projetos': 'OUR PROJECTS!',
        'projetos-subtitulo': 'Some subtitle',
        'anterior': 'Previous',
        'proximo': 'Next',
        'tecnologia-titulo': 'TECHNOLOGY AND TRUST<br>THAT DRIVE THE INDUSTRY',
        'tecnologia-texto': 'Each equipment is designed to <strong>LAST</strong>,<br><strong>PERFORM</strong>, and <strong>TRANSFORM</strong><br>your production line.',
        'sobre-nos-btn': 'ABOUT US',
        'nossos-produtos': 'OUR PRODUCTS!',
        'produtos-subtitulo': 'Some subtitle',
        'ver-mais': 'SEE MORE',
        'cta-titulo': 'READY TO MODERNIZE YOUR PRODUCTION LINE?',
        'cta-texto': 'Request a quote now with the IBA technical team!',
        'fale-conosco': 'CONTACT US',
        'nossos-clientes': 'SOME OF OUR CLIENTS',
        'footer-texto': 'Transforming the industry with technology and innovation. Customized solutions for your production line.',
        'footer-contato': 'Contact',
        'footer-endereco': 'Company address, City - State',
        'footer-telefone': '(00) 0000-0000',
        'footer-email': 'contact@iba.com',
        'footer-links': 'Quick Links',
        'footer-inicio': 'Home',
        'footer-sobre': 'About Us',
        'footer-produtos': 'Products',
        'footer-contato-link': 'Contact',
        'copyright': '© 2024 IBA. All rights reserved.',
        'desenvolvido': 'Developed by André Haubert',
        'translation-notice': 'This site is available in 3 languages. Click on the selector above to change.'
    },
    'es': {
        'inicio': 'Inicio',
        'sobre-nos': 'Sobre Nosotros',
        'linhas': 'Líneas',
        'catalogo': 'Catálogo',
        'contato': 'Contacto',
        'nossos-projetos': '¡NUESTROS PROYECTOS!',
        'projetos-subtitulo': 'Algún subtítulo',
        'anterior': 'Anterior',
        'proximo': 'Siguiente',
        'tecnologia-titulo': 'TECNOLOGÍA Y CONFIANZA<br>QUE MUEVEN LA INDUSTRIA',
        'tecnologia-texto': 'Cada equipo está diseñado para <strong>DURAR</strong>,<br><strong>RENDIR</strong>, y <strong>TRANSFORMAR</strong><br>su línea de producción.',
        'sobre-nos-btn': 'SOBRE NOSOTROS',
        'nossos-produtos': '¡NUESTROS PRODUCTOS!',
        'produtos-subtitulo': 'Algún subtítulo',
        'ver-mais': 'VER MÁS',
        'cta-titulo': '¿LISTO PARA MODERNIZAR SU LÍNEA DE PRODUCCIÓN?',
        'cta-texto': '¡Solicite un presupuesto ahora mismo con el equipo técnico de IBA!',
        'fale-conosco': 'CONTÁCTENOS',
        'nossos-clientes': 'ALGUNOS DE NUESTROS CLIENTES',
        'footer-texto': 'Transformando la industria con tecnología e innovación. Soluciones personalizadas para su línea de producción.',
        'footer-contato': 'Contacto',
        'footer-endereco': 'Dirección de la empresa, Ciudad - Estado',
        'footer-telefone': '(00) 0000-0000',
        'footer-email': 'contacto@iba.com',
        'footer-links': 'Enlaces Rápidos',
        'footer-inicio': 'Inicio',
        'footer-sobre': 'Sobre Nosotros',
        'footer-produtos': 'Productos',
        'footer-contato-link': 'Contacto',
        'copyright': '© 2024 IBA. Todos los derechos reservados.',
        'desenvolvido': 'Desarrollado por André Haubert',
        'translation-notice': 'Este sitio está disponible en 3 idiomas. Haga clic en el selector de arriba para cambiar.'
    }
};

// Função para traduzir a página
function translatePage(language) {
    // Salvar a preferência de idioma no localStorage
    localStorage.setItem('preferredLanguage', language);
    
    // Atualizar o seletor de idioma
    $('.language-selector').val(language);
    
    // Atualizar a bandeira atual
    updateCurrentFlag(language);
    
    // Atualizar a imagem do header-arrow
    updateHeaderArrowImage(language);
    
    // Traduzir todos os elementos com atributo data-translate
    $('[data-translate]').each(function() {
        const key = $(this).data('translate');
        if (translations[language] && translations[language][key]) {
            $(this).html(translations[language][key]);
        }
    });
    
    // Atualizar o atributo lang do HTML
    $('html').attr('lang', language);
}

// Função para atualizar a bandeira atual
function updateCurrentFlag(language) {
    let flagClass = 'flag-pt';
    
    if (language === 'en') {
        flagClass = 'flag-en';
    } else if (language === 'es') {
        flagClass = 'flag-es';
    }
    
    $('.current-flag .language-flag').removeClass('flag-pt flag-en flag-es').addClass(flagClass);
}

// Função para atualizar a imagem do header-arrow
function updateHeaderArrowImage(language) {
    const $headerArrow = $('.header-arrow');
    // Remover todas as classes de idioma
    $headerArrow.removeClass('pt-BR en es');
    // Adicionar a classe do idioma atual
    $headerArrow.addClass(language);
}

// Função para mostrar o aviso de tradução
function showTranslationNotice() {
    const $notice = $('.translation-notice');
    $notice.addClass('show');
    
    // Esconder o aviso após 5 segundos
    setTimeout(function() {
        $notice.removeClass('show');
    }, 5000);
}

// Inicializar a tradução quando a página carregar
$(document).ready(function() {
    // Verificar se há uma preferência de idioma salva
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        translatePage(savedLanguage);
    } else {
        // Usar o idioma padrão do navegador ou português como fallback
        const browserLanguage = navigator.language || navigator.userLanguage;
        const defaultLanguage = translations[browserLanguage] ? browserLanguage : 'pt-BR';
        translatePage(defaultLanguage);
    }
    
    // Adicionar evento de mudança ao seletor de idioma
    $('.language-selector').on('change', function() {
        translatePage($(this).val());
    });
    
    // Mostrar o aviso de tradução quando a página carregar
    showTranslationNotice();
    
    // Mostrar o aviso quando o mouse passar sobre o seletor de idioma
    $('.language-selector').on('mouseenter', function() {
        $('.translation-notice').addClass('show');
    });
    
    // Esconder o aviso quando o mouse sair do seletor de idioma
    $('.language-selector-container').on('mouseleave', function() {
        $('.translation-notice').removeClass('show');
    });
    
    // Personalizar as opções do seletor de idiomas
    $('.language-selector option').each(function() {
        const value = $(this).val();
        let flagClass = '';
        
        if (value === 'pt-BR') {
            flagClass = 'flag-pt';
        } else if (value === 'en') {
            flagClass = 'flag-en';
        } else if (value === 'es') {
            flagClass = 'flag-es';
        }
        
        $(this).html(`<span class="language-flag ${flagClass}"></span> ${$(this).text()}`);
    });
}); 