// Função para envio de formulário via WhatsApp
document.getElementById('form-contato')?.addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const servico = document.getElementById('servico').value;
  const mensagem = document.getElementById('mensagem').value.trim();

  const texto = `Olá, Victor! 👋\n\nGostaria de solicitar um orçamento.\n\n*Nome:* ${nome}\n*E-mail:* ${email}\n*Serviço:* ${servico}\n*Mensagem:* ${mensagem}`;
  const url = `https://wa.me/5583986422752?text=${encodeURIComponent(texto)}`;

  window.open(url, '_blank');
});


// --- Carrossel tipo Netflix com rolagem horizontal por setas ---
function scrollProjetos(direction) {
  const container = document.querySelector('.grid-projetos');
  const scrollAmount = container.offsetWidth / 2;
  container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}
