import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    }

})

export default mongoose.model('User', userSchema)