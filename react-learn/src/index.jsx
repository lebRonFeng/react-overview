import React from 'react';
import ReactDOM from 'react-dom';
import MyFuncComp from './MyFuncComp'
import MyClassComp from './MyClassComp';

// 使用组件，生成的，仍然是一个React元素，变化的，只是type值
// function MyFuncComp(){
//    return <h1>组件内容</h1>
// }
ReactDOM.render(
  <div>
    <MyFuncComp number="212"/>
    <MyFuncComp number={33}/>
    <MyFuncComp number={35}/>

    <MyClassComp number={66} enable/>
    <MyClassComp number={77} obj={{
      name: '张三',
      age: 18
    }}/>
    <MyClassComp number={88}  ui={<h2>这是我传递的属性</h2>}/>
  </div>,
  document.getElementById('root'))

