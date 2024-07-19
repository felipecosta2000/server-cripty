class Users {


    constructor(id, name, password, email, status, uuid, dataCreated){

        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.status = status;
        this.uuid = uuid;
        this.dataCreated;

    }

    toString(){
        return `${this.id}, ${this.name}, ${this.email} ${this.password}`
    }


}

module.exports = Users

//let user = new Users ('1', 'felipe', '123456', 'felipe@gmail.com')

//console.log (user.toString())