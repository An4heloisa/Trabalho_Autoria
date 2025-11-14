//so vai funcionar se tiver banco de dados pra amarzenar os cadastros
const formLogin = document.getElementById('form-login');

formLogin.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simula a autenticação do usuário
  if (username === 'usuario' && password === 'senha') {
    window.location.href = 'p_usuario.html';
  } else {
    alert('Usuário ou senha inválidos');
  }
});
