import { clienteService } from '../service/cliente-service.js'

const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault()
  try {
    const nome = evento.target.querySelector('[data-nome]').value
    const email = evento.target.querySelector('[data-email]').value

    await clienteService.criaCliente(nome, email)
    window.location.href = '../telas/cadastro_concluido.html'
  }
  catch (erro) {
    console.log(erro)
    window.location.href = "../telas/erro.html"
  }
})

/* Sobre a linha 3: Na constante formulario nós conseguimos entrar dentro do formulário com o atributo data-form e assim podemos pegar as informações de cadastro e postar na nossa lista de clientes usando os passos abaixo.*/

/* Sobre a linha 8: Ao clicar no botão de cadastrar ele iniciará o submit e acionará o evento. Normalmente para pegar as informações do campo fariamos com document.querySelector e buscaria o data atributes sobre o campo, mas como estamos dentro do escopo do formulário e estamos trabalhando com evento o navegador nos fornece objeto para ter mais informações sobre o evento, então podemos passar o objeto como parametro da função.*/