import mongoose from "mongoose";

const todoSchema=new mongoose.Schema({
    data:{
        type:String,
        required:true
    },
    done:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

// tabel
const todoCollection=mongoose.model('todoCollection',todoSchema);

export default todoCollection;