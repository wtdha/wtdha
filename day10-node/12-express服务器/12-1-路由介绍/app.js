// 1.引入express
// const { response, request } = require('express')
const express = require('express')

// 2.创建应用对象
const app = express()

// 定义路由

// 路由：网络地址和资源的一一对应关系
// 在express中一个路由是由请求方式，请求路径以及回调函数组成


// 127.0..0.1:5000/abc(get) 0x101010
// 127.0.0.1:5000/abc(post) 0x101010
app.get('/abc/:id?',(request,response)=>{
    // request.query 获取get请求通过查询字符串上传上来的数据
    // request.params 获取客户端上传上来的路由参数(get/post都行)
    // request.body 专门用来接收post请求上传的数据库（但是需要使用express的中间件配合）

    console.log(request.params)

    response.send('<h1>中文</h1>')
})
app.post('/abc/:id?',()=>{
    // console.log('/abc-post请求过来了')
    console.log(request.params);//接收路由参数
    console.log(request.body);
    response.send('ok')
})

// 3.开启服务器
app.listen(5000,(err)=>{
    if(err)console.log('启动失败',err)
    else console.log('服务器启动成功')
})