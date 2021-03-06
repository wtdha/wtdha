;(async function(){
const db = require('./database/db')
const express = require('express')
const {createUser} = require('./database/crub/register')
const {findUser} = require('./database/crub/login')
// 等待数据库链接成功
await db
console.log('数据库链接成功')
const app = express()


// 处理静态资源的中间件
app.use(express.static('./public'))

// 目前还不知道除了静态资源要配置那些路由，所以暂时先不写

// 处理post请求的中间件
app.use(express.urlencoded({extended:true}))

// 配置模板引擎
app.set("view engine" , "ejs")

app.set('views','./mb')

// http://127.0.0.1:5000/register 也可以写/register

// 在服务器中配置路由，处理注册请求
app.post('/register',async (req,res)=>{
    const {username,password} = req.body
   await createUser(username,password)
//    重定向到登录页面
    res.redirect('http://127.0.0.1:5000/views/login.html')
})

// 配置处理登录的路由
app.post('/login',async(req,res)=>{
    const {username,password} = req.body

    let user = await findUser(username,password)
    // console.log(user)
    if(user){
        // res.send('登录成功')

        // 调用res.render函数,相当于就是让express,去存放模板的路径下找到指定模板,然后根据指定数据,渲染一个html页面,并且最终将html页面响应给浏览器
        // res.render('模板名称',数据)
        res.render('home',user)
    }else{
        res.send('用户名或密码错误')
    }
})

// 开启服务器
app.listen(5000,(err)=>{
    if(err) console.log('服务器启动失败',err)
    else console.log('服务器启动成功')
})
})()
