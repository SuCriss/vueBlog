/**
 * Created by sukun on 2018/6/7.
 */
// sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'insert into user(id, userName, userPwd) values (?, ?, ?)',
    query:'select userName,userPwd from user'
  }
}

module.exports = sqlMap;
