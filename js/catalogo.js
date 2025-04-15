document.addEventListener('DOMContentLoaded', function() {
    // Elementos DOM
    const addToQuoteButtons = document.querySelectorAll('.add-to-quote-btn');
    const quoteSidebar = document.getElementById('quoteSidebar');
    const openQuoteSidebarBtn = document.getElementById('openQuoteSidebar');
    const closeSidebarBtn = document.getElementById('closeSidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const selectedProductsContainer = document.getElementById('selectedProducts');
    const quoteCountElement = document.getElementById('quoteCount');
    const quoteForm = document.getElementById('quoteForm');
    
    // Array para armazenar os produtos selecionados
    let selectedProducts = [];
    
    // Adicionar produto ao orçamento
    addToQuoteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            const productName = this.getAttribute('data-name');
            
            // Verificar se o produto já foi adicionado
            if (!selectedProducts.some(product => product.id === productId)) {
                selectedProducts.push({
                    id: productId,
                    name: productName
                });
                
                updateQuotePanel();
                openQuoteSidebar();
                
                // Feedback visual
                button.innerHTML = '<i class="fas fa-check"></i> Adicionado';
                button.style.backgroundColor = '#28a745';
                
                setTimeout(() => {
                    button.innerHTML = '<i class="fas fa-plus-circle"></i> Adicionar ao orçamento';
                    button.style.backgroundColor = '#0470AB';
                }, 2000);
            }
        });
    });
    
    // Atualizar o painel de orçamento
    function updateQuotePanel() {
        // Atualizar o contador
        quoteCountElement.textContent = selectedProducts.length;
        
        // Atualizar a lista de produtos
        if (selectedProducts.length > 0) {
            let productsHTML = '';
            
            selectedProducts.forEach(product => {
                productsHTML += `
                    <div class="product-item" data-id="${product.id}">
                        <span class="product-item-name">${product.name}</span>
                        <button class="remove-product" data-id="${product.id}">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                `;
            });
            
            selectedProductsContainer.innerHTML = productsHTML;
            
            // Adicionar evento para remover produtos
            document.querySelectorAll('.remove-product').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = this.getAttribute('data-id');
                    removeProduct(productId);
                });
            });
            
            // Esconder a mensagem de lista vazia
            document.querySelector('.empty-list-message').style.display = 'none';
        } else {
            selectedProductsContainer.innerHTML = '<p class="empty-list-message">Nenhum produto selecionado</p>';
        }
    }
    
    // Remover produto do orçamento
    function removeProduct(productId) {
        selectedProducts = selectedProducts.filter(product => product.id !== productId);
        updateQuotePanel();
    }
    
    // Abrir painel lateral
    function openQuoteSidebar() {
        quoteSidebar.classList.add('open');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Impedir rolagem
    }
    
    // Fechar painel lateral
    function closeQuoteSidebar() {
        quoteSidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Permitir rolagem
    }
    
    // Eventos para abrir/fechar o painel
    openQuoteSidebarBtn.addEventListener('click', openQuoteSidebar);
    closeSidebarBtn.addEventListener('click', closeQuoteSidebar);
    sidebarOverlay.addEventListener('click', closeQuoteSidebar);
    
    // Manipular envio do formulário
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (selectedProducts.length === 0) {
            alert('Por favor, adicione pelo menos um produto ao orçamento.');
            return;
        }
        
        // Coletar dados do formulário
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const company = document.getElementById('company').value;
        const message = document.getElementById('message').value;
        
        // Preparar o conteúdo do email
        const subject = `Solicitação de Orçamento - ${name} (${company})`;
        
        let emailBody = `
            <h2>Nova Solicitação de Orçamento</h2>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefone:</strong> ${phone}</p>
            <p><strong>Empresa:</strong> ${company}</p>
            <h3>Produtos de Interesse:</h3>
            <ul>
        `;
        
        selectedProducts.forEach(product => {
            emailBody += `<li>${product.name}</li>`;
        });
        
        emailBody += `</ul>`;
        
        if (message) {
            emailBody += `
                <h3>Observações Adicionais:</h3>
                <p>${message}</p>
            `;
        }
        
        // Configurar dados para o envio
        const formData = new FormData();
        formData.append('to', 'sac@iba.ind.br');
        formData.append('subject', subject);
        formData.append('body', emailBody);
        
        // Enviar email usando o serviço de email (você precisará implementar isso no servidor)
        // Como exemplo, estou usando fetch para enviar para um endpoint
        fetch('send-email.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // Mostrar modal de sucesso
                const successModal = new bootstrap.Modal(document.getElementById('successModal'));
                successModal.show();
                
                // Limpar formulário e produtos selecionados
                quoteForm.reset();
                selectedProducts = [];
                updateQuotePanel();
                
                // Fechar o painel lateral após um pequeno delay
                setTimeout(() => {
                    closeQuoteSidebar();
                }, 1000);
            } else {
                throw new Error('Falha ao enviar o email');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente mais tarde.');
        });
    });

    // Adicione animações para os cards de produtos ao rolar a página
    const productCards = document.querySelectorAll('.product-card');
    
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        
        productCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            
            if (cardTop < triggerBottom) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
            }
        });
    }
    
    // Inicialmente, defina todos os cards como invisíveis
    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
    });
    
    // Verifique o scroll quando a página carregar
    window.addEventListener('load', checkScroll);
    
    // Verifique o scroll durante a rolagem
    window.addEventListener('scroll', checkScroll);
    
    // Script necessário para o PHP - adicione o código a seguir
    // Crie um arquivo send-email.php com o seguinte conteúdo:
    /*
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $to = $_POST["to"];
        $subject = $_POST["subject"];
        $body = $_POST["body"];
        
        // Cabeçalhos para envio de HTML
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=UTF-8\r\n";
        $headers .= "From: contato@seudominio.com.br\r\n";
        
        // Enviar o email
        $success = mail($to, $subject, $body, $headers);
        
        if ($success) {
            http_response_code(200);
            echo json_encode(["status" => "success", "message" => "Email enviado com sucesso!"]);
        } else {
            http_response_code(500);
            echo json_encode(["status" => "error", "message" => "Falha ao enviar o email."]);
        }
    } else {
        http_response_code(405);
        echo json_encode(["status" => "error", "message" => "Método não permitido."]);
    }
    ?>
    */
});