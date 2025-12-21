const { describe, expect, it } = require('@jest/globals');
const ServicePessoa = require("../src/services/pessoa");

describe("Primeiro teste de pessoa", () => {
    const service = new ServicePessoa();

    it("Add um nome na lista", () => {
        const nome = "Ana";
        service.adicionar(nome);
        const nomes = service.pegarTodos();

        expect(nomes[nomes.length - 1]).toBe(nome)
    })

    it("update um nome na lista", () => {
        const nome = "Lucas";
        const index = 2
        service.alterar(index, nome);
        const nomes = service.pegarTodos();

        expect(nomes[index]).toBe(nome)
    })

    it("deletar um nome na lista", () => {
        const index = 0
        const nomeAntes = service.pegarUm(index);
        service.deletar(index);
        const nomeDepois = service.pegarUm(index);

        expect(nomeAntes).not.toBe(nomeDepois)
    })
})