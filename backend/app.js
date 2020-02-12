// app.js

const express = require('express')
const path = require('path')
const body_parser = require('body-parser')
var dbConfig = require('./DBConfig')
const app = express()
const port = 8888

//设置跨域访问
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

function getDb() {
  const mysqlHost = 'localhost'
  const mysqlUser = 'root'
  const mysqlPwd = 'root'
  const mysqlDb = 'model_abc'
  const mysql = require('mysql')
  const conn = mysql.createConnection(dbConfig.mysql)
  conn.connect()
  return conn
}

app.use(
  body_parser.urlencoded({
    extended: false
  })
)

app.get('/', function(reg, res) {
  const obj = {
    name: 'hcoder',
    version: 1.1
  }
  res.json(obj)
})

app.get('/user', function(reg, res) {
  const db = getDb()
  db.query('select * from user;', null, function(error, result) {
    if (error) {
      console.log(error)
    } else {
      const obj = {
        status: 0,
        data: result
      }
      res.json(obj)
    }
  })
})

const server = app.listen(port, function() {
  console.log(`服务器运行在http://${dbConfig.mysql.host}:${port}`)
})
