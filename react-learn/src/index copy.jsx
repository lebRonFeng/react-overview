import React from 'react';
import ReactDOM from 'react-dom';
import Student from './components/Student'

// 获取所有学生数据
function fetchStudents() {
  // var stus = await fetch('https://shanhe.kim/api/za/shenhuifu.php')
  //   .then(resp => resp.json()).then(resp => resp.data)
  var stus = [
    { address: '新疆乌鲁木齐', appkey: 'demo13_15450988', birth: 1995, ctime: 1554049415, email: '382246268@qq.com', id: 27414, name: '张楠', phone: 18897896655, sNo: '11011', sex: 1, utime: 1561472121 },
    { address: '山东青岛', appkey: 'demo13_15450988', birth: 1995, ctime: 1554049417, email: '382246268@qq.com', id: 27415, name: '李飞', phone: 18897896655, sNo: '11012', sex: 0, utime: 1561472121 },
    { address: '黑龙江哈尔滨市XXX', appkey: 'demo13_15450988', birth: 1995, ctime: 1554049415, email: '382246268@qq.com', id: 27416, name: '洪湖就', phone: 18897896655, sNo: '11013', sex: 1, utime: 1561472121 },
  ]
  console.log(stus)
  return stus
}

fetchStudents()

const s = {
  address: '新疆乌鲁木齐',
  appkey: 'demo13_15450988',
  birth: 1995, ctime: 1554049415,
  email: '382246268@qq.com', 
  id: 27414,
  name: '张楠', 
  phone: 18897896655,
  sNo: '11011', 
  sex: 1, 
  utime: 1561472121
}

ReactDOM.render(<Student {...s}/>, document.getElementById('root'))
