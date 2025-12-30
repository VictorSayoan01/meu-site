// Formulário para WhatsApp
document.getElementById('form-contato').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const servico = document.getElementById('servico').value;
  const mensagem = document.getElementById('mensagem').value.trim();

  const texto = `Olá, Victor! 👋\n\nGostaria de solicitar um orçamento.\n\n*Nome:* ${nome}\n*E-mail:* ${email}\n*Serviço:* ${servico}\n*Mensagem:* ${mensagem}`;
  const url = `https://wa.me/5583986422752?text=${encodeURIComponent(texto)}`;

  window.open(url, '_blank');
});


// Função de carrossel com paginadores
function iniciarSlider(id) {
  const slider = document.getElementById(id);
  const imagens = slider.querySelectorAll('img');
  const dotsContainer = document.getElementById(`dots-${id}`);
  let index = 0;

  imagens.forEach((_, i) => {
    const dot = document.createElement('button');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      index = i;
      atualizarSlider();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('button');

  function atualizarSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  setInterval(() => {
    index = (index + 1) % imagens.length;
    atualizarSlider();
  }, 3000);
}

// Ativar o slider
iniciarSlider("slider-image");
console.log("Carrossel iniciado");
