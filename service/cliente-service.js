const listaClientes = () =>  {
    return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar os clientes')
    })
}

const criaCliente = (nome, email) => { 
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar um cliente')
    })
}

const removeCliente = (id) => { 
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
    .then( resposta => { 
        if(!resposta.ok){
        throw new Error('Não foi possível deletar um cliente')
        }
    })
}
 
const detalhaCliente = (id) => { 
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => { 
        if(resposta.ok){
            return resposta.json()
        }
    
        throw new Error('Não foi possível detalhar um cliente')
    })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: { 
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome, 
            email: email
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar um cliente')
    })
}

export const clienteService = { 
    listaClientes,
    criaCliente, 
    removeCliente,
    detalhaCliente,
    atualizaCliente

}


// Sobre a linha 12 : A fetch está retornando o Promise, que é equivalente ao objeto a baixo, aprendido na aula 1:

/* const promise = new Promise((resolve, reject)=>{
    const http = new XMLHttpRequest() //solicitações HTTP para recuperar dados de um servidor web sem ter que recarregar toda a página

    http.open('GET', 'http://localhost:3000/profile') //Pega as informações do API

    http.onload = () => {
        if(http.status >= 400){
            reject(JSON.parse(http.response)) //Se o Http der erro que é um valor no status acima de 400 quer dizer que a promise será rejeitada.
        } else {
            resolve(JSON.parse(http.response)) //Se o status do Http for menor é pq foi aprovada
        }
    }
    http.send() // Envia os dados 
}) 
return promise */

/* Sobre a linha 11 : Com esse método POST ele envia as informações dos clientes para nossa lista de clientes, o headers é o tipo de aplicação que estamos enviando. No corpo do formulário será preenchido o nome e email, por isso temos um objeto com nome e email. Precisamos passar os parametros para criar o cliente adotamos o nome e email, assim eles preenchem as informações no body. A comunicação entre cliente e servidor é por texto então usamos o JSON.stringify().*/

/* Sobre a linha 24 : Com a requisição feita precisamos que ele retorne o corpo da resposta que é através do resposta.body, esses dados são o nome e email. */

/* Sobre a linha 32 : É usado o método DELETE para excluir e para identificar qual será o usário que será excluido, por meio da id. */ 
