const Sequelize = require("sequelize");
const sequelize = new Sequelize("tbl_test", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});
const User = require("../model/User")(sequelize);

function createUsers(payload) {
  User.create(payload).then((user) => {
    return user;
  });
}

function findAll(params) {
  User.findAll(params).then((users) => {
    return user;
  });
}

function findById(id) {
  User.findByPk(id).then((user) => {
    return user;
  });
}

function updateUser(payload, where) {
  User.update(payload, where).then((updatedUser) => {
    return updatedUser;
  });
}

exports.createUsers = createUsers;
exports.findAll = findAll;
exports.findById = findById;
exports.updatedUser = updateUser;
