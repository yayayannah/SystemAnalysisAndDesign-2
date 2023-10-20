// models/Comment.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Comment = sequelize.define("tbl_comment", {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  return Comment;
};
