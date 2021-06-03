// 在app中需要使用module1的fn1函数,所以要导入module1的代码
// 由于module1导出的是一个对象.所以接收的module1常量就是那个对象
const module1 = require('./module1')
const module2 = require('./module2')
const module3 = require('./module3')

// module1.fn1()
// console.log(module2)
console.log(module3)
