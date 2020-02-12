debugger
var express = require('express')
var router = express.Router()
//导入MySQL模块
var mysql = require('mysql')
var dbConfig = {
  host: '127.0.0.1',
  port: '9000',
  user: 'root',
  password: '1234',
  database: 'pxx'
}
//使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql)
//响应一个JSON数据
var responseJSON = function(res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '-200',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}

//查询所有用户
//添加用户
router.get('/getAll', function(req, res) {
  //从连接池获取连接
  pool.getConnection(function(err, connection) {
    // //获取前台页面传过来的参数
    // var param = req.query || req.params;
    //建立连接 添加一个用户信息
    connection.query('SELECT * FROM user', function(err, result) {
      console.log(result)

      //以json形式，把操作结果返回给前台页面
      responseJSON(res, result)

      //释放连接
      connection.release()
    })
  })
})

module.exports = router
