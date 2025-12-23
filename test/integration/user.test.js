const database = require("../../src/database");
const serviceUser = require("../../src/services/user")
describe("Teste de Usuário", () => {
 
    beforeAll(async () => {
        this.transaction = await database.db.transaction()
    })

    afterAll(async() => {
        await this.transaction.rollback()
    })

    it("should create an user", async () => {
        const user = {
            email: "batata2@test.com.br", 
            password: "123456" };

        const addUser = await serviceUser.create(user.email, user.password, this.transaction);
        this.id = addUser.id

        expect(addUser.email).toBe(user.email)
        expect(addUser.password).toBe(user.password)     
    });
    
    it("should update an user", async () => {
        const user = {
            id: this.id,
            email: "emailalterado@test.com.br", 
            password: "123456" };

        const updateUser = await serviceUser.update(user.id, user.email, user.password, this.transaction);

        expect(updateUser.email).toBe(user.email)
        expect(updateUser.password).toBe(user.password)           
    });
    
    it("should delete an user", async () => {
        const user = {
            id: this.id};

        const response = await serviceUser.delete(user.id, this.transaction);

        expect(response).toBe(true)           
    });
});