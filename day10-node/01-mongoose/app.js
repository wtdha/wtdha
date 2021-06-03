;(async function () {
  // 1. 引入mongoose
  const mongoose = require('mongoose')

  try {
    // 2. 连接数据库
    await mongoose.connect('mongodb://127.0.0.1:27017/web0323mgs', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    // 3. 这里的代码可以执行表示数据库连接成功
    console.log('数据库连接成功')

    // 4. 创建约束对象(Schema)
    // 4.1 获取Schema构造函数
    const Schema = mongoose.Schema
    // 4.2 创建Schema对象
    const schemaObj = new Schema({
      username: {
        type: String,
        required: true,
      },

      age: {
        type: Number,
        required: true,
      },

      gender: {
        type: String,
        required: true,
      },

      info: {
        type: Schema.Types.Mixed,
        default: '暂无',
      },

      register_date: {
        type: Date,
        default: Date.now(),
      },
    })

    // 5. 创建model对象(集合)

    // const modelObj = mongoose.model(集合名, Schema对象)
    const modelObj = mongoose.model('users', schemaObj)

    // 6. 利用model对象,对数据库进行增删改查
    modelObj.create(
      {
        username: 'zs',
        age: 18,
        gender: '男',
      },
      (err, data) => {
        console.log(err, data)
      }
    )
  } catch (error) {
    // 如果数据库连接失败,或数据库连接成功之后,后面的代码出现错误,都会进入到这个catch中
    console.log(error)
  }
})()
