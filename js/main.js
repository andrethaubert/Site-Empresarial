$(document).ready(function() {
    // Animação suave do scroll para os links do menu
    $('.nav-link').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

    // Animação dos itens do menu ao passar o mouse
    $('.nav-link').hover(
        function() {
            $(this).stop().animate({
                opacity: 0.8
            }, 200);
        },
        function() {
            $(this).stop().animate({
                opacity: 1
            }, 200);
        }
    );

    // Animação dos ícones sociais
    $('.social-icon').hover(
        function() {
            $(this).stop().animate({
                opacity: 0.8,
                scale: 1.1
            }, 200);
        },
        function() {
            $(this).stop().animate({
                opacity: 1,
                scale: 1
            }, 200);
        }
    );

    // Animação de entrada para o logo
    $('.navbar-brand').css('opacity', '0').animate({
        opacity: 1
    }, 1000);

    // Animação de entrada para os itens do menu
    $('.nav-item').each(function(index) {
        $(this).css('opacity', '0').delay(index * 200).animate({
            opacity: 1
        }, 500);
    });

    // Animação de entrada para os ícones sociais
    $('.social-icon').css('opacity', '0').delay(1000).animate({
        opacity: 1
    }, 500);
    
    // Configuração do carrossel para mudar a cada 6 segundos
    $('#projectCarousel').carousel({
        interval: 6000
    });
    
    // Animação de entrada para a seção de tecnologia
    $(window).scroll(function() {
        var technologySection = $('.technology-section');
        var technologyTitle = $('.technology-title');
        var technologyText = $('.technology-text');
        var aboutButton = $('.about-button');
        
        var technologySectionTop = technologySection.offset().top;
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        
        if (scrollTop + windowHeight * 0.8 > technologySectionTop) {
            // As animações agora são controladas pelo CSS
        }
    });
    
    // Animação para as palavras destacadas
    $('.technology-text strong').each(function(index) {
        $(this).css('opacity', '0').delay(1000 + index * 300).animate({
            opacity: 1
        }, 800);
    });
    
    // Efeito de destaque para o botão
    $('.about-button').hover(
        function() {
            $(this).stop().animate({
                letterSpacing: '2px'
            }, 300);
        },
        function() {
            $(this).stop().animate({
                letterSpacing: 'normal'
            }, 300);
        }
    );
}); 