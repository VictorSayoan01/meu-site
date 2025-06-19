document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita envio padrão

    // Coletar os dados
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const servico = document.getElementById('servico').value;
    const mensagem = document.getElementById('mensagem').value.trim();

    // Texto de apresentação
    const texto = `Olá, Victor! 👋\n\nGostaria de solicitar um orçamento.\n\n*Nome:* ${nome}\n*E-mail:* ${email}\n*Serviço de interesse:* ${servico}\n*Mensagem:* ${mensagem}`;

    // Meu contato
    const telefone = '5583986422752'; 
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

    // Redirecionar para o WhatsApp
    window.open(url, '_blank');
});
