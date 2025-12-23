const database = require("../../src/database");
const servicePerson = require("../../src/services/person")

describe("Teste de Usuário", () => {

    beforeAll(async () => {
        this.transaction = await database.db.transaction()
    })

    afterAll(async() => {
        await this.transaction.rollback()
    })

    it("should create a person", async () => {
        const person = {
            name : "Lucas Magedanz", 
            address : "Rua Duque de Caxias 2262, Ap901",
            userId : 1
        }

        const addPerson = await servicePerson.create(person.name, person.address, person.userId, this.transaction); 
        this.id = addPerson.id  

        expect(addPerson.name).toBe(person.name)
        expect(addPerson.address).toBe(person.address)     
    });
    it("should update a person", async () => {
        const user = {
            id: this.id,
            name: "Lucas Mittmann Magedanz", 
            address : "Rua Duque de Caxias 2262, Ap901",
            userId : 1
         };

        const updatePerson = await servicePerson.update(user.id, user.name, user.address, user.userId, this.transaction);

        expect(updatePerson.name).toBe(user.name)
        expect(updatePerson.address).toBe(user.address)           
        expect(updatePerson.userId).toBe(user.userId)           
    });
    it("should delete a person", async () => {
        const user = {
            id: this.id};

        const response = await servicePerson.delete(user.id, this.transaction);
        expect(response).toBe(true)           
    });

});