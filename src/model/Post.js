const { DataTypes, Sequelize } = require("sequelize")

module.exports=(sequelize)=>{
    const Post = sequelize.define("tbl_post", {
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        content:{
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return Post
}