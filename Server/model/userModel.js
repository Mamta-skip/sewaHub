const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
   
    userGmail:{
        type:String,
        required:[true,"User gmail  must be provided"],
        unique:true,
        lowercase:true 
    },
   
    role:{
        type:String,
        enum:["customer","provider"],
        default:"customer"
    },
    password:{
        type:String,
        required:[true,"password must provided"]
    }

})
const User= mongoose.model("User",userSchema)
module.exports=User
