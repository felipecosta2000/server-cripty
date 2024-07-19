const mongoose = require("mongoose")
const mongodb = require("mongodb")

const UserSchema = new mongoose.Schema({

        id: {
            type: mongodb.ObjectId,
            default: new mongodb.ObjectId()
        },
        email:{
            type : String,
            index: {unique:true},
            require: true
        },
        password: String,
        name: String,
        status: String,
        uuid: String,
        dataCreated:{
            type: Date,
            default:Date.now()
        }
        
})

UserSchema.pre('save',function(next){
    if (this.dataCreated){
        this.dataCreated.setHours(this.dataCreated.getHours() - 3)
    }
    next();


});

module.exports = mongoose.model('users' ,UserSchema)
