const Sequelize = require("sequelize");
require("dotenv").config();

async function connectToDB() {
  const sequelize = new Sequelize("tbl_test", "root", "123456", {
    host: "localhost",
    dialect: "mysql",
  });
  const User = require("../model/User")(sequelize);
  const Post = require("../model/Post")(sequelize);

  User.hasMany(Post); // A user can have many posts
  Post.belongsTo(User); // A post belongs to a user

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
