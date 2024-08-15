import React from 'react';
import ReactDOM from 'react-dom';
import TickControl from './TickControl';

// const btn = <button onClick={() => {console.log('点击了！！！')}} onMouseEnter={() => {
//   console.log('鼠标移入了')
// }}>点击我</button>
const tc = new TickControl()
console.log(tc)
ReactDOM.render(<TickControl/>, document.getElementById('root'))