const express = require('express')
const app = express()

// 作用：默认req.body无法获取
app.use(express.urlencoded({extended:true}))

// 自定义中间件
app.use(function(request,rsponse,next){
    console.log('中间件1')
    next()
})
app.use(function(request,rsponse,next){
    console.log('中间件2')
    next()
})


app.get('/test',(req,res)=>{
    console.log(req.query)
    res.send('get-ok')
})

app.post('/test',(req,res)=>{
    console.log(req.query)
    res.send('post-ok')
})

app.listen(5000,()=>{
    console.log('ok')
})
