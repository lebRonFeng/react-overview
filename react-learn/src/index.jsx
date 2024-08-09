import React from 'react';
import ReactDOM from 'react-dom';
import src1 from './assets/1.jpg'
import src2 from './assets/2.jpg'
import src3 from './assets/3.jpg'

let index = 0; //索引
const srcs = [src1, src2, src3]
const container = document.getElementById('root')
let timer = null

function render(){
  ReactDOM.render(<img src={srcs[index]} alt="" />, container)
}

function start() {
  stop()
  timer = setInterval(() => {
    index = (index + 1) % 3
    render()
  }, 2000)
}

function stop(){
  clearInterval(timer)
}

render()
start()

container.onmouseenter = function(){
  stop()
}

container.onmouseleave = function(){
  start()
}

