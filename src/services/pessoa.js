const repositoryPessoa = require("../repository/pessoa");
const repo = new repositoryPessoa();

class servicePessoa
 {
    pegarTodos() {
        return repo.pegarTodos()
    }
    pegarUm(id) {
        return repo.pegarUm(id)
    }
    adicionar(nome) {
        return repo.adicionar(nome)
    }
    alterar(id, nome) {
        return repo.alterar(id, nome)
    }
    deletar(id) {
        return repo.deletar(id)
    }
}

module.exports = servicePessoa;