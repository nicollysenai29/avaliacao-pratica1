// Adicione um evento de clique ao botão "Contato" para mostrar ou ocultar a lista de habilidades
document.getElementById('contatoBtn').addEventListener('click', function() {
    var habilidades = document.getElementById('habilidades');
    if (habilidades.style.display === 'none') {
        habilidades.style.display = 'block';
    } else {
        habilidades.style.display = 'none';
    }
});

// Adicione validação ao formulário de contato
document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Por favor, preencha todos os campos antes de enviar.');
        event.preventDefault();
    } else {
        alert('Mensagem enviada com sucesso!');
    }
});

// Adicione animação às seções "Sobre", "Habilidades" e "Contato"
document.getElementById('sobre').addEventListener('click', function() {
    document.getElementById('sobreText').style.opacity = '1';
});

document.getElementById('habilidadesBtn').addEventListener('click', function() {
    document.getElementById('habilidadesText').style.opacity = '1';
});

document.getElementById('contato').addEventListener('click', function() {
    document.getElementById('contatoText').style.opacity = '1';
});