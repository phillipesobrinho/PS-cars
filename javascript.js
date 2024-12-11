document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio tradicional do formulário

    // Inicializa o slider Slick (apenas uma vez)
    $(document).ready(function(){
        $('.slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    });

    // Limpar mensagens anteriores
    document.getElementById('formMessage').innerHTML = '';

    // Coletar dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const description = document.getElementById('description').value;

    // Validar campos
    if (!name || !email || !description) {
        document.getElementById('formMessage').innerHTML = 'Por favor, preencha todos os campos!';
        return;
    }

    // Enviar os dados para o endpoint PHP
    fetch('endpoint.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&description=${encodeURIComponent(description)}`
    })
    .then(response => response.json())  // Espera uma resposta JSON do servidor
    .then(data => {
        // Exibe uma mensagem de sucesso com os dados retornados
        alert(`Sucesso! Dados recebidos: ${JSON.stringify(data)}`);
        // Mostra mensagem de sucesso no formulário
        document.getElementById('formMessage').innerHTML = 'Formulário enviado com sucesso!';
        document.getElementById('formMessage').style.color = 'green';
    })
    .catch(error => {
        // Se ocorrer erro ao enviar os dados
        document.getElementById('formMessage').innerHTML = 'Erro ao enviar dados. Tente novamente.';
        document.getElementById('formMessage').style.color = 'red';
        console.error('Erro:', error);
    });
});
