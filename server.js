const express = require("express")
const bodyParser = require("body-parser")
const cors = require ("cors")
const mongoose = require("mongoose")
const {v4: uuidv4} = require("uuid")

const UserSchema = require ("./Entity/UsersSchema")
const UsersBCriptyService = require ("./Service/UsersBCriptyService")

const app = express()

app.use(bodyParser.json())
app.use(cors())

require('./DB/DataBase')

app.post("/api/user", async (req, res)=>{

    try{
        const user = new UserSchema({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            status: 'ativo',
            uuid: uuidv4(),

        });

        const objeto = new UsersBCriptyService (user.password)

            user.password = objeto.gerarCriptografia()
                await UserSchema.create(user)
                .then(resp=>{
                    return res.status(200).json(resp);

                })
                .catch(err=>{
                    throw Error("Nao Gravado os dados do Usuario:" + err.message)
                })


    }catch(error){
        return res.status(500).json({"mensagem":"gravação nao concluida","error":error.message})

    }


});

//app.get("/api/list", (req, res)=>{

    //try{
        //const list = new UserSchema({
            //name: res.body.name,
            //email: res.body.email,
            //password: res.body.password,

        //});


//}catch (error){

   // return res.status(500).json({"mensagem":"gravação nao concluida","erro":error.message})

//};

//});
 
app.get("/api/teste", (req,res)=>{
  return res.status(200).json({"mensagem": "Ola mundo"});
})

app.listen(4001,()=>{
    console.log("Servidor Startado na Node na Porta 4001")
})