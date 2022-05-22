const mongoose=require('mongoose');

// create schema
const todoSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
})

//create model
const Todo=mongoose.model('TODOList',todoSchema);

module.exports = Todo;