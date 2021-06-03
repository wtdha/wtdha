// 1.引入express
const express = require('express')

// 2.创建应用对象
const app = express()

app.get('/abc',(request,response)=>{
    // response.send('<h1>中文</h1>')//用来响应客户端，只能响应一些字符串
    // download可以传相对路径也可以传绝对路径
    response.download('../assets/队列.jpg')//响应给浏览器，让浏览器下载指定文件
    // response.download(__dirname+'/assets/队列.jpg')
    console.log(__dirname+'/assets/队列.jpg')
})
app.post('/abc/:id?',()=>{
    
    response.send('ok')
})

// 3.开启服务器
app.listen(5000,(err)=>{
    if(err)console.log('启动失败',err)
    else console.log('服务器启动成功')
})