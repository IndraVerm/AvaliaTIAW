// verificar se tem uma sessao valida
// se tiver, esconder a parte de login e cadastro
// se tiver, aparecer uma pagina mostrando o nome do usuario

console.log("chamado!");

if (localStorage.getItem("@name")) {
  const AuthContainer = document.getElementsByClassName("logins-container")[0];
  AuthContainer.remove();
}
