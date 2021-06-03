 const fs = require('fs')

// fs.writeFile('./assets/test.txt','你好大世界',(err,data)=>{
//     // 成功了err就是null，失败了err就是错误对象
//     console.log(err,data)
// })

// fs.writeFile(
//     './assets/test.txt',
//     // 默认覆盖原来的内容，flag的值改为a就可以从后面添加，如果没有这个文件回自动创建
//     '哈哈哈',
//     {
//         flag:'a',
//     },
//     (err)=>{
//         console.log(err)
//     }
// )


// 创建写入流
const ws = fs.createWriteStream('./assets/other.mp3')

const rs = fs.createReadStream('./assets/music.mp3')

rs.on('data',(data)=>{
    ws.write(data)
})


// 读取流打开了会自动关闭.那么写入流也会自动关闭吗?
// 写入流不会自动关闭. 所以写入流需要我们自己手动关闭
// 写入完毕的时候就关闭写入流, 读取流关闭的时候,意味着写入完毕.
rs.on('close',function(){
    ws.end()
})
 ws.on('close',function(){
     console.log('写入流关闭了')
 })
 ws.on('open',function(){
     console.log('写入流开启 了')
 })