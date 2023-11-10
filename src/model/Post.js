// models/Post.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Post = sequelize.define("tbl_posts", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Post;
};
