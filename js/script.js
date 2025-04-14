$(document).ready(function() {
    // Animação do header
    $('.header-arrow-img').addClass('slide-in');
    
    // Animação da seção de tecnologia
    function checkTechnologySection() {
        var technologySection = $('.technology-section');
        var technologyTitle = $('.technology-title');
        var technologyText = $('.technology-text');
        var aboutButton = $('.about-button');
        
        if (isElementInViewport(technologySection[0])) {
            technologyTitle.addClass('animate');
            technologyText.addClass('animate');
            aboutButton.addClass('animate');
        }
    }
    
    // Animação da seção de produtos
    function checkProductsSection() {
        var productsSection = $('.products-section');
        var productsTitle = $('.products-title');
        var productsSubtitle = $('.products-subtitle');
        var productItems = $('.product-item');
        var viewMoreButton = $('.view-more-button');
        
        if (isElementInViewport(productsSection[0])) {
            productsTitle.addClass('animate');
            productsSubtitle.addClass('animate');
            productItems.each(function(index) {
                $(this).css('animation-delay', (index * 0.1) + 's');
                $(this).addClass('animate');
            });
            viewMoreButton.addClass('animate');
        }
    }
    
    // Função auxiliar para verificar se elemento está visível
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Verificar seções ao carregar e ao rolar
    checkTechnologySection();
    checkProductsSection();
    
    $(window).on('scroll', function() {
        checkTechnologySection();
        checkProductsSection();
    });
    
    // Carrossel de projetos
    $('#projectCarousel').carousel({
        interval: 6000
    });

    // Função para animar os produtos quando entrarem na viewport
    function animateProducts() {
        $('.product-item').each(function() {
            if (isElementInViewport(this) && !$(this).hasClass('animate')) {
                $(this).addClass('animate');
            }
        });
    }

    // Executar a animação quando a página carregar
    animateProducts();

    // Executar a animação quando o usuário rolar a página
    $(window).on('scroll', function() {
        animateProducts();
    });
}); 