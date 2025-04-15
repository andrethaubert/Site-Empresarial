// Script para a página de Linhas e Projetos

$(document).ready(function() {
    // Animação dos cards ao scroll
    function animateCards() {
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        
        $('.project-card').each(function() {
            var offsetTop = $(this).offset().top;
            
            if (scrollTop + windowHeight > offsetTop + 100) {
                $(this).addClass('animated');
            }
        });
    }
    
    // Animação inicial dos cards
    setTimeout(function() {
        $('.project-card').each(function(index) {
            var card = $(this);
            setTimeout(function() {
                card.addClass('animated');
            }, 150 * index);
        });
    }, 500);
    
    // Animar cards ao scroll
    $(window).on('scroll', function() {
        animateCards();
    });
    
    // Efeito hover nos cards em dispositivos móveis
    if ($(window).width() < 768) {
        $('.card-container').on('click', function() {
            $('.project-overlay').css('opacity', '0');
            $(this).find('.project-overlay').css('opacity', '1');
        });
    }
    
    // Redirecionamento para a página de detalhes
    $('.btn-project').on('click', function(e) {
        e.preventDefault();
        var projectId = $(this).attr('href').split('=')[1];
        // Armazenar o ID do projeto no sessionStorage
        sessionStorage.setItem('selectedProject', projectId);
        // Redirecionar para a página de detalhes
        window.location.href = $(this).attr('href');
    });
});

  $(document).ready(function () {
    $('.project-box').hide().each(function (i) {
      $(this).delay(150 * i).fadeIn(500);
    });
  });

