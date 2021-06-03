const express = require('express')
const app = express()


// 处理静态资源的中间件
app.use(express.static('./public'))

// 目前还不知道除了静态资源要配置那些路由，所以暂时先不写


// 开启服务器
app.listen(5000,(err)=>{
    if(err) console.log('服务器启动失败',err)
    else console.log('服务器启动成功')
})