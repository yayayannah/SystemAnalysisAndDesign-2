const Sequelize = require ("sequelize");



    const sequelize = new Sequalize ("db_sad2","root","",{
        host: "localhost",
        dialect: "mysql",
    });

    const User = require("../model/User")(sequelize);

    function createUsers(payLoad){
        User.create(payload).then((user)=> {
            return user;
        });
    } 


exports.createUsers=createUsers;