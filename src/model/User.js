const { DataTypes, Sequelize } = require("sequelize")

module.exports=(sequelize)=>{
    const User = sequelize.define("tbl_user", {
        username:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        }

    });
    return User
}