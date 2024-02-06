/* 

Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas de abrir uma caixa com botões de seleção de plataforma
   Passo 1 - pegar o botão de seleção de plataformas no JS para poder verificar quando o usuário clicar em cima dele

   Passo 2 - pegar o elemento do conteudo que precisa ser mostrado

   Passo 3 -pegar o clique de usuario no js 

   passo 4 - quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão pra que o conteudo apareça 

Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido

   Passo 1 - verificar se o botão ja esta aberto, se sim, devemos remover a classe ativo pra que ela esconda o conteúdo novamente

*/


const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");


botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});

