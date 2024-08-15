import React, { Component } from 'react'
import Tick from './Tick'

export default class TickControl extends Component {
  // constructor(props){
  //   super(props)
  //   第一种：处理this为undefined问题
  //   this.handleClick = this.handleClick.bind(this);
  //   this.handleOver = this.handleOver.bind(this);
  // }

  state = {
    isOver: false //倒计时是否完成
  }

  handleClick() {
    console.log(this)
    console.log('点击了')
  }

  handleOver = () => {
    this.setState({
      isOver: true
    })
  }
  render = () => {
    let status = '正在倒计时'
    if (this.state.isOver) {
      status = '倒计时完成'
    }
    return (
      <div>
        <Tick
          number={10}
          onClick={this.handleClick}
          onOver={this.handleOver} />
        <h2>
          {status}
        </h2>
      </div>
    )
  }
}