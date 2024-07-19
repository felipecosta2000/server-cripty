const bcrypt = require("bcrypt")

class UsersBCriptyService{

    constructor(password){

        this.password = password
        this.passwordCrypt = undefined

    }

    gerarCriptografia(){
        const salt  = 10;
        this.passwordCrypt = bcrypt.hashSync(this.password, salt);

        return this.passwordCrypt
    }

    checkCriptografia(){
        return bcrypt.compareSync(this.password, this.passwordCrypt);

    }



}

module.exports = UsersBCriptyService

//let objeto = new UsersBCriptyService('123456')

//let resp = objeto.gerarCriptografia();

//console.log(objeto.gerarCriptografia());
//console.log(objeto.checkCriptografia());
//console.log(objeto.checkCriptografia("1234567"))

