// Função de compra com alerta
function comprar(produto) {
  alert(`Você comprou: ${produto}`);
}

// Envio do formulário de contato
document.addEventListener('DOMContentLoaded', () => {
  const formContato = document.getElementById('form-contato');

  if (formContato) {
    formContato.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Mensagem enviada com sucesso!');
      formContato.reset(); // limpa o formulário após o envio
    });
  }
});
function comprar(produto) {
  alert(`Você comprou: ${produto}`);
}

document.getElementById('form-contato').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Mensagem enviada com sucesso!');
});

const servicos = document.querySelectorAll('.servico');
const totalSpan = document.getElementById('total-servicos');

function atualizarTotal() {
  let total = 0;
  servicos.forEach((item) => {
    if (item.checked) {
      total += parseFloat(item.value);
    }
  });
  totalSpan.textContent = total.toFixed(2);
}

servicos.forEach((item) => {
  item.addEventListener('change', atualizarTotal);
});
