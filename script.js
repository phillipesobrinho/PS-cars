document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio tradicional do formulário e evita que a página recarregue



// Coletar dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const description = document.getElementById('description').value;

 
 
// // Validar campos,  Falsy
//     if (!name || !email || !description) {
//         document.getElementById('formMessage').innerHTML = 'Por favor, preencha todos os campos!';
//         return;
//     }

    // Se todos os campos estiverem preenchidos, exibe uma mensagem 
    document.getElementById('formMessage').innerHTML = 'Formulário enviado com sucesso!';
    document.getElementById('formMessage').style.color = 'green';  // Exibe a mensagem de sucesso em verde
});
