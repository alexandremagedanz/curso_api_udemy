const user = require("../model/user")

class serviceUser {
    findAll() {
        return user.findAll();
    }
    findByIndex(index) {
        return user.findByIndex(index);
    }
    create(name) {
        user.create(name);
    }
    update(index, name) {
        user.update(index, name);
    }
    delete(index) {
        user.delete(index);
    }
}

module.exports = new serviceUser();