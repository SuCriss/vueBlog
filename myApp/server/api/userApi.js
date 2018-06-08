/**
 * Created by sukun on 2018/6/7.
 */
var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

// conn.connect();
var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

// 增加用户接口
router.post('/addUser', (req, res) => {
  var sql = $sql.user.add;
  var date =new Date()
  date = date.getTime();
  var params = req.body;
  console.log(params);
  conn.query(sql,[date,params.username, params.pwd], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      console.log(result);
      jsonWrite(res, result);
    }
  })
});
router.post('/getUser',(req,res) =>{
    var sql = $sql.user.query;
    var params = req.body;
    conn.query(sql,[params.username,params.pwd],function (err,result) {
      if(err){
        console.log(err)
      }
      if(result){
        console.log(result);
        res.json(result)
      }
    })
})

module.exports = router;
