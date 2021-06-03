// 1.引入express
const express = require('express')

// 2.创建应用对象
const app = express()

// 定义路由


// 3.开启服务器
app.listen(5000,(err)=>{
    if(err)console.log('启动失败',err)
    else console.log('服务器启动成功')
})