const Sequelize = require("sequelize")

function connectToDB() {

}

function getName(x){
    const sequelize=new Sequelize("db_sad2","root","",{
        host: "localhost",
        dialect: "mysql"
    })
    sequelize.authenticate().then(()=>{
        //this is the resolve promise
        console.log("DB connection is successful")
    }).catch((err)=>{
        //reject the promise
        console.error("Encountered error",err);
    })
}

exports.connectToDB=connectToDB