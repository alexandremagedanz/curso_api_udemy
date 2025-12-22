const Sequelize = require('sequelize');

class Database {
    constructor(config) {
        this.init();
    }

    init() {
        this.db = new Sequelize({
            database: "exemplo-udemy",
            host: "localhost",
            username: "root",
            password: "Alex01-lo",
            dialect: 'mysql'
        });
    }
}

module.exports = new Database();