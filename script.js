// ============================
// ENVIO DE FORMULÁRIO WHATSAPP
// ============================

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


// ============================
// CARROSSEL PORTFÓLIO (SCROLL)
// ============================

function scrollProjetos(direction) {

  const container = document.querySelector('.grid-projetos');

  if(!container) return;

  const scrollAmount = container.offsetWidth / 2;

  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });

}


// ============================
// ANIMAÇÃO DOS INDICADORES
// ============================

const indicadores = document.querySelectorAll('.numero');

function animarIndicadores(){

  indicadores.forEach(indicador => {

    const alvo = +indicador.getAttribute('data-target');

    let valor = 0;

    const incremento = Math.ceil(alvo / 80);

    const contador = setInterval(() => {

      valor += incremento;

      if(valor >= alvo){
        indicador.textContent = alvo;
        clearInterval(contador);
      } else {
        indicador.textContent = valor;
      }

    },20);

  });

}

const secaoIndicadores = document.getElementById('indicadores');

if(secaoIndicadores){

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if(entry.isIntersecting){

        animarIndicadores();

        observer.disconnect();

      }

    });

  }, { threshold: 0.4 });

  observer.observe(secaoIndicadores);

}

// ============================
// MINIATURA
// ============================

function trocarImagem(elemento,idImagem){

  const imagemPrincipal = document.getElementById(idImagem);

  imagemPrincipal.src = elemento.src;

}