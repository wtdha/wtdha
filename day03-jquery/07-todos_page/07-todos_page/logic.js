// 存放了跟todo相关的业务逻辑的代码
// 刚学完jquery. 为了练习. 就通过这个案例,利用jquery对页面的元素进行增删改查

// 需求1: 在文本框中 todo-header input  输入内容,按下回车键,表示输入完成,将输入的内容,添加到任务列表中

//1. 获取 todo-header input . 然后注册键盘抬起事件
$('.todo-header input').on('keyup', function (e) {
  //2. 在事件处理函数中,判断按下的是否是回车键
  if (e.keyCode === 13) {
    // 3. 如果是回车键,就将输入的内容,添加到任务列表
    // 3.1 获取用户输入的信息
    var value = $(this).val().trim()
    // 3.2 判断用户是否输入.如果没有就return
    if (!value) return
    // 3.3 如果用户输入了,就将用户输入信息和字符串拼接起来
    var str =
      '<li><label><input type="checkbox" /><span>' +
      value +
      '</span></label><button class="btn btn-danger" >删除</button></li>'
    // 3.4. 将拼接好的字符串,添加到todo-main里面
    $('.todo-main').append(str)
    // 3.5 将input清空
    $(this).val('')

    // 动态的控制全选
    allIsChecked()
  }
})

// 需求2: 点击复选框,修改任务的状态
// 2.1 获取todo-main,利用事件委托,给任务中的复选框注册点击事件
// 注意: 事件委托时,委托的子元素的选择器写的时候,要在被委托对象的范围中写
$('.todo-main').on('click', 'li>label>input', function () {
  // 2.2 在事件处理函数中,状态要修改,文本的展示样式要修改
  //   console.log('触发了')
  $(this).next().toggleClass('isDone')

  // 2.3 如果都选中的了,让全选也选中
  allIsChecked()
})

// 需求3: 点击全选,让任务列表中的复选框的状态跟着全选变化
// 3.1 获取全选按钮,注册点击事件
$('.todo-footer input').on('click', function () {
  // 3.2 在事件处理函数中,让任务列表中所有的复选框都改变
  $('.todo-main li input').prop('checked', $(this).prop('checked'))

  // 3.3 根据状态给文本添加样式
  $(this).prop('checked')
    ? $('.todo-main li span').addClass('isDone')
    : $('.todo-main li span').removeClass('isDone')
})

// 封装函数, 用于判断全选按钮是否要被选中
function allIsChecked() {
  //选中的复选框的个数?
  var doneTotal = $('.todo-main li input:checked').length
  // 所有的任务个数
  var total = $('.todo-main li input').length

  // 给全选设置
  $('.todo-footer input').prop('checked', doneTotal === total)
}
