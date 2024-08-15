import React, { Component } from 'react'

export default class Tick extends Component {
  // 初始化状态， JS Nuxt 语法，目前处于实验阶段
  state = {
    left: this.props.number
  }
  constructor(props) {
    super(props);

    this.timer = setInterval(() => {
      this.setState({
        left: this.state.left - 1
      })
      // 重新设置状态，触发自动的重新渲染
      if(this.state.left === 0){
        // 停止定时器
        clearInterval(this.timer)
      }
    }, 1000)
  }
  render() {
    return (
      <h1>
        倒计时剩余时间：{this.state.left}
      </h1>
    )
  }
}