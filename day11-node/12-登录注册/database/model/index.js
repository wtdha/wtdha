const mongose = require('mongoose')

// 创建schema对象

const Schema = mongose.Schema

const lrSchema = new Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    data:{
        type:Date,
        default:Date.now(),
    },
})


module.exports = mongose.model('lr',lrSchema)