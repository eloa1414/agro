// Função para simular o cadastro de um usuário
function cadastrarUsuario(event) {
  event.preventDefault(); // Impede o envio real do formulário

  // Coletando os dados inseridos no formulário
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Validando os campos
  if (password !== confirmPassword) {
    document.getElementById('mensagemCadastro').innerText = 'As senhas não coincidem. Tente novamente.';
    document.getElementById('mensagemCadastro').style.color = 'red';
    return;
  }

  // Exibindo uma mensagem de sucesso
  document.getElementById('mensagemCadastro').innerText = 'Cadastro realizado com sucesso!';
  document.getElementById('mensagemCadastro').style.color = 'green';

  // Limpando os campos do formulário
  document.getElementById('formCadastro').reset();
}
