const Sequelize = require("sequelize");

async function connectToDB() {
  const sequelize = new Sequelize("sad1", "root", "123456", {
    host: "localhost",
    dialect: "mysql",
  });

  await sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((error) => {
      console.error("Unable to connect to the database: ", error);
    });
}

exports.connectToDB = connectToDB;
