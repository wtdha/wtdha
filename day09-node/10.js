// const buffer = new Buffer(10)长度为10
// const buffer = Buffer.alloc(10)创建了一个10位的buffer实例
// const buffer = Buffer.allocUnsafe(10)有值
 const buffer = Buffer.from('你好世界')
console.log(buffer)
console.log(buffer.toString())


//Buffer.alloc()  安全, 但是效率相对不高
//Buffer.allocUnsafe() 不安全,但是相对效率高
// Buffer.from()  将其他类型,转成buffer
