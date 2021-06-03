// 引入fs模块
const fs = require('fs')

// 调用方法
// fs.readFile(文件路径，回调函数)
// fs.readFile('./assets/防盗链.txt',(err,data)=>{
// 如果读取成功就打印出null，失败就是错误对象
// data就是读取到的数据，默认是一个buffer对象
    // console.log(err,data.toString())
// })
// 转字符串得到一个网址


// 创建一个可读流（流式读取）
const rs = fs.createReadStream('./assets/music.mp3')

// 可以监听流的读取，每读一次回调函数执行一次，直到读取完毕
rs.on('data',(data)=>{
    console.log(data)
})

// 监听读取流的开启和关闭
rs.on('open',function(){
    console.log('读取流开启了')
})
rs.on('close',function(){
    console.log('读取流关闭了')
})