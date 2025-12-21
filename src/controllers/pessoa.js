const servicePessoa = require("../services/pessoa");

const service = new servicePessoa;

class cotrollerPessoa {
    pegarTodos(req, res) {
        try {
            const nomes = service.pegarTodos();
            res.status(200).json({nomes});
        } catch (error) {
            console.log(error.message);
            res.status(500).json({error: error.message});
        }
    }
    pegarUm(req, res) {
        try {
            const id = req.params.id;
            const nome = service.pegarUm(id);
            res.status(200).json({nome});
        } catch (error) {
            console.log(error.message);
            res.status(500).json({error: error.message});
     }
    }
    adicionar(req, res) {
        try {
            const nome = req.body.nome;
            service.adicionar(nome);
            res.status(200).json({"messagem": "Nome adicionado com sucesso"});
        } catch (error) {
            console.log(error.message);
            res.status(500).json({error: error.message});
        }
    }
    alterar(req, res) {
        try {
            const id = req.params.id;
            const nome = req.body.nome;
            service.alterar(id, nome);
            res.status(200).json({"messagem": "Nome alterado com sucesso"});
        } catch (error) {
            console.log(error.message);
            res.status(500).json({error: error.message});
        }  
    }
    deletar(req, res) {
        try {
            const id = req.params.id;
            service.deletar(id);
            res.status(200).json({"messagem": "Nome deletado com sucesso"});
        } catch (error) {
            console.log(error.message);
            res.status(500).json({error: error.message});
        }
    }
}

module.exports = cotrollerPessoa;