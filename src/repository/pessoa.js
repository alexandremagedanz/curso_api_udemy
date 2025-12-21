const banco = new Array('joao', 'ana','renam');

class repositoryPessoa {
    pegarTodos() {
        return banco;
    }
    pegarUm(index) {
        return banco[index];
    }
    adicionar(nome) {
        banco.push(nome);
    }
    alterar(index, nome) {
        banco[index] = nome;
    }
    deletar(index) {
        banco.splice(index, 1);
    }
}

module.exports = repositoryPessoa;