import React, { Component } from 'react'

export default class Comp extends Component {

  state = {
    n: 0
  }

  handleClick = () => {
    this.setState(cur => {
      // 参数cur表示当前的状态
      // 该函数的返回结果，会混合（覆盖）掉之前的状态
      // 该函数是异步执行的
      return {
        n: cur.n + 1
      }
    })
  }
  // 回调函数的形式执行一次后：n为3，但不优雅
  // handleClick = () => {
  //   this.setState({
  //     n: this.state.n + 1
  //   }, () => {
  //     this.setState({
  //       n: this.state.n + 1
  //     }, () => {
  //       this.setState({
  //         n: this.state.n + 1
  //       })
  //     })
  //   })

    // 写三个改变n的函数，最终render后n为1
    // this.setState({
    //   n: this.state.n + 1
    // }, () => {
    //   console.log(this.state.n)
    // })

    // this.setState({
    //   n: this.state.n + 1
    // }, () => {
    //   console.log(this.state.n)
    // })
  // }
  render(){
    return (
      <div>
        <h1>
          {this.state.n}
        </h1>
        <p>
          <button onClick={this.handleClick}>+</button>
        </p>
      </div>
    )
  }
}