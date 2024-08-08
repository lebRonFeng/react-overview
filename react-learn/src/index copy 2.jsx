import React from 'react';
import ReactDOM from 'react-dom';


const a = 1234, b = 41;

// const obj = {
//   a: 1,
//   b: 2
// }

// const obj = <span>这是一个span元素</span>

const arr = [2,3,4,5,87]

const numbers = new Array(30).fill(0);
var lis = numbers.map((item,i) => (<li key={i}>第{i+1}个</li>))
const div = (
  <div>
    {/* 以下不会产生任何输出 */}
    {a} * {b} = {a * b}
    <p>
      {/* 普通对象无法放置 */}
      {/* {obj} */}
      </p>
      <p>
      {/* React元素对象没问题 */}
      {/* {obj} */}
      </p>
      <p>
      {arr}
      </p>
      <ul>
        {lis}
      </ul>
  </div>
)
ReactDOM.render(div, document.getElementById('root'))
